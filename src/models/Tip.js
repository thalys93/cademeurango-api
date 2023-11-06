const Sequelize = require('sequelize');
const database = require("../config/db_config.js")
const user = require('./User.js');


const Tip = database.define("tip", {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
    authorID:{
        type: Sequelize.UUID,
        references: { model: user, key: 'UUID' },
        allowNull: false
    }
    })
    
    module.exports = Tip;