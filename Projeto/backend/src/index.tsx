import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import rota from './router.tsx';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(rota);

app.listen(3333, () => {
  console.log('Server is up! :D')
})




/* const { DBFFile } from "dbffile";
const shapefile from "shapefile";

async function readDBF() {
    let dbf = await DBFFile.open('./ibge_municipio.dbf');
    console.log(`DBF file contains ${dbf.recordCount} records.`);
    console.log(`Field names: ${dbf.fields.map(f => f.name).join(', ')}`);
    for await (const record of dbf) console.log(record);
}



async function readSHP() {
shapefile.open("./ibge_municipio.shp")
    .then(source => source.read()
        .then(function log(result) {
            if (result.done) return;
            console.log(result.value.geometry.coordinates);
            /* result.value.geometry.coordinates[0].map((e) => {
                console.log(e)
            }) * /
            return source.read().then(log);
        }))
    .catch(error => console.error(error.stack));
}



//readSHP()
readDBF()

//Teste de git */