const Sequelize = require('sequelize');
const database = require('../config/db_config.js');


const user = database.define('user', {
    UUID:{
        type: Sequelize.UUID,
        primaryKey: true,              
        
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,        
    },
});

module.exports = user;