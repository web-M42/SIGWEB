import fastify from "fastify";


const rota = fastify()


rota.get('/teste', (req,res) => {  res.send({ "res" : 'teste de resposta' }) })



export default rota;