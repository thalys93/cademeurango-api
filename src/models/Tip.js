const Sequelize = require('sequelize');
const database = require("../config/db_config.js")
const user = require('./User.js');


const Tip = database.define("tip", {
    UUID: { 
        type: Sequelize.STRING,        
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    authorUUID:{
        type: Sequelize.STRING,
        references: { model: user, key: 'UUID' },
        allowNull: false
    }
    })
    
    module.exports = Tip;