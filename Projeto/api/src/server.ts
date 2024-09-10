import fastify from "fastify";
import cors from '@fastify/cors'
import rota from './router.js'

import { User } from "./routes/usuarios.js";


const app = fastify()
await app.register(cors, { /*put your options here*/ })

app.register(User);

app.listen({ port: 3333 }).then(() => {
    console.log('server running!')
})