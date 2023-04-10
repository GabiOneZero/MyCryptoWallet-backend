import { Sequelize } from "sequelize-typescript"
import { UserPojo } from "../models/user.model"
import { WalletPojo } from "../models/wallet.model"

export const connect = () => {
    const DB_HOSTNAME = 'localhost'
    const DB_PORT = 5432
    const DB_NAME = 'MCW_db'
    const DB_USERNAME = 'admin'
    const DB_PASSWORD = '0123456'
    const DB_SCHEMA = 'mcw'
    const DB_DIALECT : any = 'postgres' 

    const dbConfig = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        repositoryMode : true,
        pool : {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    })

    dbConfig.addModels([UserPojo, WalletPojo])

    const db : any = {}
    db.Sequelize = Sequelize
    db.sequelize = dbConfig

    return db
}
