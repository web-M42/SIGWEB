"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const app = (0, express_1.default)();
const route = (0, express_1.Router)();
// Middleware para usar JSON
app.use(express_1.default.json());
// Definindo rota para o endpoint raiz
route.get('/', (req, res) => {
    res.json({ message: 'hello world with TypeScript' });
});
// Usando o roteador definido acima
app.use(route);
// Inicializando o servidor na porta 3333
app.listen(3333, () => {
    console.log('Server running on port 3333');
});
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
