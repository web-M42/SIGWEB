const user = (sequelize:any, DataTypes:any) => {
    const User = sequelize.define('usuarios',{
        nome          : { type: DataTypes.string },
        email         : { type: DataTypes.string },
        senha         : { type: DataTypes.string },
        instituicao   : { type: DataTypes.string },
        cidade        : { type: DataTypes.string },
        tipoparceiro  : { type: DataTypes.string },
        estrategiagip : { type: DataTypes.string },
        sexo          : { type: DataTypes.string },
        avatar        : { type: DataTypes.string },
        status        : { type: DataTypes.string },
        perfil        : { type: DataTypes.string },
    })

    return User
}

module.exports = user