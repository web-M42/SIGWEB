import Sequelize from 'sequelize'

const db = require('../db/db')

const User = require('./usuarios')

const user = User(db,Sequelize.DataTypes)


const tables = {
    user,
    db
}

module.exports = tables