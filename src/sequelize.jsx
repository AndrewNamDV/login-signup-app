import config from'./model/db.config'
const Sequelize = require("sequelize");
export const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
    }
);