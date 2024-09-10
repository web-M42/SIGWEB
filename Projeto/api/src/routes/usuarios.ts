import { FastifyInstance } from "fastify";
import DB from '../configs/db.js'
import nodemailer from 'nodemailer'
import { getMailClient } from '../configs/email.js'



export async function User(app : FastifyInstance){

    app.get('/usuarios/listar', async (req, res) => {
        const get = await DB.query("SELECT * FROM usuarios");
        return res.send(get.rows || null)
    })


    app.post('/usuarios/cadastrar', async (req:any, res) => {

        let inx = "INSERT INTO usuarios ( "+
            " \"nome\", "+
            " \"email\", "+
            " \"senha\", "+
            " \"instituicao\", "+
            " \"cidade\", "+
            " \"tipoparceiro\", "+
            " \"estrategiagip\", "+
            " \"sexo\", "+
            " \"avatar\", "+
            " \"status\", "+
            " \"perfil\" "+
        " ) values ( "+
            " '"+req.body.nome+"', "+
            " '"+req.body.email+"', "+
            " '"+req.body.senha+"', "+
            " '"+req.body.instituicao+"', "+
            " '"+req.body.cidade+"', "+
            " '"+req.body.tipoparceiro+"', "+
            " '"+req.body.estrategiagip+"', "+
            " '"+req.body.sexo+"', "+
            " '"+req.body.avatar+"', "+
            " '"+req.body.status+"', "+
            " '"+req.body.perfil+"' "+
        " ) ";

        console.log(inx)

        try {
            const insert : any = await DB.query(inx);
            const email = await getMailClient()

            const message = await email.sendMail({

                from :{
                    name    : 'SIGWEB GIP',
                    address : 'admin@sigweb.com,br'
                },
                to : {
                    name    : req.body.nome,
                    address : req.body.email,
                },
                subject : 'Testando envio de e-mail',
                html    : '<h1>Testando funcionalidade de email</h1>'
            })

            console.log(nodemailer.getTestMessageUrl(message))

            return res.code(200).send(JSON.parse('{ "resp" : "s" }'))
        } catch (error) {
            return res.code(400).send(JSON.parse('{ "resp" : "n" }'))
        }

    })


    app.put('/usuarios/update', async (req:any, res:any) => {

        let inx = "UPDATE usuarios set "+
            " \"nome\"          = '"+req.body.nome+"',          "+
            " \"email\"         = '"+req.body.email+"',         "+
            " \"senha\"         = '"+req.body.senha+"',         "+
            " \"instituicao\"   = '"+req.body.instituicao+"',   "+
            " \"cidade\"        = '"+req.body.cidade+"',        "+
            " \"tipoparceiro\"  = '"+req.body.tipoparceiro+"',  "+
            " \"estrategiagip\" = '"+req.body.estrategiagip+"', "+
            " \"sexo\"          = '"+req.body.sexo+"',          "+
            " \"avatar\"        = '"+req.body.avatar+"',        "+
            " \"status\"        = '"+req.body.status+"',        "+
            " \"perfil\"        = '"+req.body.perfil+"'         "+

        " where id = '"+req.body.id+"' ";

        try {
            const insert : any = await DB.query(inx);
            return res.code(200).send(JSON.parse('{ "resp" : "s" }'))
        } catch (error) {
            return res.code(400).send(JSON.parse('{ "resp" : "n" }'))
        }

    })


    app.get('/usuarios/view/:id', async (req:any, res:any) => {

        let inx = "SELECT * FROM usuarios where id = '"+req.params.id+"' ";

        try {
            const get : any = await DB.query(inx);
            return res.code(200).send(get.rows || null)
        } catch (error) {
            return res.code(400).send(JSON.parse('{ "resp" : "n" }'))
        }
    })


    app.delete('/usuarios/delete/:id', async (req:any, res:any) => {

        let inx = "UPDATE usuarios set \"status\" = 3 where id = '"+req.params.id+"' ";

        try {
            const insert : any = await DB.query(inx);
            return res.code(200).send(JSON.parse('{ "resp" : "s" }'))
        } catch (error) {
            return res.code(400).send(JSON.parse('{ "resp" : "n" }'))
        }

    })


    app.put('/usuarios/bloquear/:id', async (req:any, res:any) => {

        let inx = "UPDATE usuarios SET \"status\" = CASE WHEN \"status\" = '2' THEN '1' WHEN \"status\" = '1' THEN '2' ELSE \"status\" END WHERE id = "+req.params.id+" ";

        try {
            const insert : any = await DB.query(inx);
            return res.code(200).send(JSON.parse('{ "resp" : "s" }'))
        } catch (error) {
            return res.code(400).send(JSON.parse('{ "resp" : "n" }'))
        }

    })

}