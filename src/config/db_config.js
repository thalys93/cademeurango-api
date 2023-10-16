const ConfigDB = {
    dialect: 'mysql',
    host: 'localhost' || process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
    }
};

module.exports = ConfigDB;
