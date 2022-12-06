const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
}else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            dialect: 'mysql'
        }
    );
}

module.exports = sequelize;