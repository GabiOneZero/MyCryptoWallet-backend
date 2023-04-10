"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const wallet_model_1 = require("../models/wallet.model");
const currency_model_1 = require("../models/currency.model");
const user_model_1 = require("../models/user.model");
const connect = () => {
    const DB_HOSTNAME = 'localhost';
    const DB_PORT = 5432;
    const DB_NAME = 'MCW_db';
    const DB_USERNAME = 'admin';
    const DB_PASSWORD = 'Admin1234';
    const DB_SCHEMA = 'mcw';
    const DB_DIALECT = 'postgres';
    const dbConfig = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    dbConfig.addModels([wallet_model_1.WalletPojo, currency_model_1.CurrencyPojo, user_model_1.UserPojo]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = dbConfig;
    return db;
};
exports.connect = connect;
