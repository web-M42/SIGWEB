import { connect } from 'ts-postgres';

const DB = await connect({
    "host": "localhost",
    "port" : 5432,
    "user" : "postgres",
    "database":"GIZ",
    "password":""
});

export default DB