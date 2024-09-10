
//import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import crypto     from 'crypto';
import env        from 'dotenv/config';
const rash        = crypto.createHash('sha1');
const DB          = require('../db/db')


const transporter = nodemailer.createTransport({
    host: process.env.Email_host,
    port: Number(process.env.Email_port),
    secure: process.env.Email_port === '465', // true for 465, false for other ports
    auth: {
        user: process.env.Email_user,
        pass: process.env.Email_pass
    },
    tls: { rejectUnauthorized: false }
});


await DB.connect();

module.exports = {

    /*
    *
    *    Login
    *
    */
    async login(req:any, res:any) {
        /* 
           #swagger.tags = ['Usuarios']
           #swagger.description = '<h1>Login usuario</h1>'
           #swagger.summary = 'Login usuario'
        
           #swagger.parameters['obj'] = { 
               in: 'body',
               description: '
                   <h4>Modelo de envio de dados</h4>
               ',
               type: 'object',
               schema: {
                   "Email" : "dryvos@gmail.com",
                   "Senha": "123",
               }
           }    
        */
        console.log(req.body);

        const { Email, Senha } = req.body;

        const key = crypto.pbkdf2Sync(Senha, 'salt', 100000, 64, 'sha512');
        const Rash = key.toString('hex');

        console.log({ Rash, Email, Status : 1 });
        let response = '';
        try {
            const Usuario = await DB.query(" SELECT id FROM usuarios WHERE Email = '"+Email+"' and senha = '"+Rash+"' and Status = 1 ");
            response = res.status(200).json({ resp: 's', Usuario : Usuario.rows  });
        } catch (error) {
            response = res.status(400).json({ resp: 'n'});
        }
        
        await DB.end()
        return response;
    },


    /*
    *
    *    Cadastro Usuário
    *
    */
    async store(req:any, res:any) {

        /* 
            #swagger.tags = ['Usuarios']
            #swagger.description = '<h1>Cadastro usuario</h1>'
            #swagger.summary = 'Cadastro usuario'

            #swagger.parameters['obj'] = { 
                in: 'body',
                description: '
                    <h4>Modelo de envio de dados</h4>
                ',
                type: 'object',
                schema: {
                    "Nome" : "Heygon edit",
                    "Email" : "dryvos@gmail.com",
                    "Senha": "123"
                }
            }    
        */
        const { Nome, Email, Senha } = req.body;
    
        const verifica = await DB.query(" SELECT id FROM usuarios WHERE Email = '"+Email+"' ");
        
        if(verifica.rows != null){
            await DB.end()
            return res.status(400).json({ resp: 'repetido' });
        }else{
    
            const key = crypto.pbkdf2Sync(Senha, 'salt', 100000, 64, 'sha512');
            const Rash = key.toString('hex');

            let file = '';
            try {
                file = req.file.filename;
            } catch (error) {
                file = '';
            }

            try{
                let User = await DB.query(" INSERT INTO usuarios ( nome, email, senha, instituicao, cidade, tipoparceiro, estrategiagip, sexo, avatar, status, perfil ) ");

                await User.create({
                    Nome    : Nome,
                    Email   : Email,
                    Rash    : Rash,
                    Avatar  : file,
                    Status  : 1
                });
                

            
                let corpo = '';
                corpo += '<!DOCTYPE html>';
                corpo += '<html>';
                corpo += '<head>';
                corpo += '<title></title>';
                corpo += '</head>';
                corpo += '<body style="background:linear-gradient(to bottom, #fae18d, #F4C329); padding:30px">';
                corpo += '<div style="width:100%; text-align:center;">';
                corpo += '<img src="https://logosm42.s3.us-east-2.amazonaws.com/logomin3.png" style="width:35%" />';
                corpo += '</div>';
                corpo += '<div style="width: 100%; background: #fff; border-radius:5px; padding:20px">';
                corpo += '<h1>Olá, '+Nome+',</h1>';
                corpo += '<p>Ficamos felizes pelo seu cadastro no Busca peças e esperamos te ajudar a tornar sua saúde ainda melhor!</p>';
                corpo += '<p>Até a próxima!</p>';
                corpo += '</div>';
                corpo += '</body>';
                corpo += '</html>';
            
            
                const mailOptions = {
                    from: 'Busca Peças <'+process.env.Email_sender+'>',
                    to: Email,
                    subject: 'Bem vindo!',
                    html: corpo
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        return res.status(400).json({ resp: 'email' });
                    } else {
                        return res.status(200).json({ resp: 's'});
                    }
                });
            } catch (error){
                return res.status(400).json({ resp: 'erro' });
            }
        }
    },


    /*
    *
    *    Atualiza dados do usuário
    *
    */
    async update(req:any, res:any) {

        /*
            #swagger.tags = ['Usuarios']
            #swagger.description = '<h1>Atualizar usuario</h1>'
            #swagger.summary = 'Atualizar usuario'

            #swagger.parameters['obj'] = { 
                in: 'body',
                description: '
                    <h4>Modelo de envio de dados</h4>
                ',
                type: 'object',
                schema: {
                    "Nome" : "Heygon",
                    "Email" : "dryvos@gmail.com",
                    "Avatar": "",
                }
            }    
        */

        //console.log(req.body);
        try {
            
            let { id, Nome, Email, Senha, Avatar } = req.body;

            let user = await User.findById(id);

            if(Senha == undefined || Senha == null || Senha == ''){}else{
                const key = crypto.pbkdf2Sync(Senha, 'salt', 100000, 64, 'sha512');
                user.Rash = key.toString('hex');
            }
            
            user.Nome   = Nome;
            user.Email  = Email;
            user.Avatar = Avatar;
            await user.save();
            
            return res.status(200).json({ resp: 's' });
        } catch (e) {
            return res.status(400).json({ resp: 'n' });
        }

    },


    /*
    *
    *    Enviar email recuperar senha
    *
    */
    async recuperarSenha(req:any, res:any) {
        /* 
            #swagger.tags = ['Usuarios']
            #swagger.description = '<h1>Recuperar senha usuario</h1>'
            #swagger.summary = 'Recuperar senha usuario'

            #swagger.parameters['obj'] = { 
                in: 'body',
                description: '
                    <h4>Modelo de envio de dados</h4>
                ',
                type: 'object',
                schema: {
                    "Email" : "dryvos@gmail.com",
                }
            }    
        */
        
            const { Email } = req.body;

        const verificaConta = await User.find({Email});
        if(verificaConta.length >= 1){
            let Token = new Date().getTime();
            verificaConta[0].Token = Token;

            let corpo = '';
            corpo += '<!DOCTYPE html>';
            corpo += '<html>';
            corpo += '<head>';
            corpo += '<title></title>';
            corpo += '</head>';
            corpo += '<body style="background:linear-gradient(to bottom, #fae18d, #F4C329); padding:30px">';
            corpo += '<div style="width:100%; text-align:center;">';
            corpo += '<img src="https://logosm42.s3.us-east-2.amazonaws.com/logomin3.png" style="width:35%" />';
            corpo += '</div>';
            corpo += '<div style="width: 100%; background: #fff; border-radius:5px; padding:20px">';
            corpo += '<h1>Olá, '+verificaConta[0].Nome+',</h1>';
            corpo += '<p>Recebemos uma solicitação para recuperar senha.<br> Caso tenha sido você, clique no botão abaixo para continuar.</p>';
            corpo += '<a href="link'+Token+'" style="width:150px; margin-left:calc(50%-75px); border-radius:50px; padding:15px; text-align:center; background:#212b54; color:#fff;">Recuperar senha</p>';
            corpo += '<p>Até a próxima!</p>';
            corpo += '</div>';
            corpo += '</body>';
            corpo += '</html>';


            const mailOptions = {
                from: 'Busca Peças <'+process.env.Email_user+'>',
                to: Email,
                subject: 'Recuperar Senha',
                html: corpo
            };

            transporter.sendMail(mailOptions, async function (error, info) {
                if (error) {
                    console.log(error);
                    return res.json({ resp: 'n' });
                } else {
                    await verificaConta[0].save();
                    return res.json({ resp: 's'});
                }
            });

        }else{
            return res.json({ resp: 'nao_encontrado' });
        }
    },


    /*
    *
    *    Enviar email recuperar senha
    *
    */
    async atualizarSenha(req:any, res:any) {
        /* 
            #swagger.tags = ['Usuarios']
            #swagger.description = '<h1>Atualizar senha usuario</h1>'
            #swagger.summary = 'Atualizar senha usuario'

            #swagger.parameters['obj'] = { 
                in: 'body',
                description: '
                    <h4>Modelo de envio de dados</h4>
                ',
                type: 'object',
                schema: {
                    "Senha" : "1234",
                    "Email" : "dryvos@gmail.com",
                    "Token" : "",
                }
            }    
        */
        console.log(req.body);

        const { Email, Senha, Token } = req.body;

        const user = await User.find({ Email ,Token });
        console.log(user);

        const key = crypto.pbkdf2Sync(Senha, 'salt', 100000, 64, 'sha512');
        user.Rash = key.toString('hex');

        try{
            await User.save();
            return res.json({ resp: 's'});
        }catch(e){
            return res.json({ resp: 'n'});
        }

    },
    
    

    /*
    *
    *    Bloquear Conta
    *
    */
    async block(req:any, res:any) {
        /* 
           #swagger.tags = ['Usuarios']
           #swagger.description = '<h1>Bloquear usuario</h1>'
           #swagger.summary = 'Bloquear usuario'
        
           #swagger.parameters['obj'] = { 
               in: 'body',
               description: '
                   <h4>Modelo de envio de dados</h4>
               ',
               type: 'object',
               schema: {
                   "Status" : "2",
                   "id" : "",
               }
           }    
        */
        const user = await User.findById(req.body.id);
        user.Status = req.body.status;

        try{
            await User.save();
            return res.json({ resp: 's'});
        }catch(e){
            return res.json({ resp: 'n'});
        }
    },



};