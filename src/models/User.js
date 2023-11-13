const Sequelize = require('sequelize');
const database = require('../config/db_config.js');


const user = database.define('user', {
    UUID:{
        type: Sequelize.STRING,
        primaryKey: true,              
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    isAuthor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },    
    name: {
        type: Sequelize.STRING,
        allowNull: false,        
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    terms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },    
    imageLink: {
        type: Sequelize.STRING,
        allowNull: true,
    },

});

module.exports = user;