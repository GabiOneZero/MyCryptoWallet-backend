import { UserPojo } from "../models/user.model";
import { connect } from "../config/user.db.config"
import { WalletPojo } from "../models/wallet.model";
import logger from "../../utils/logs.utils";

export class UserRepository{
    _database : any = {}
    _userRepository : any
    _walletRepository : any

    constructor(){
        this._database = connect()
        this._userRepository = this._database.sequelize.getRepository(UserPojo)
        this._walletRepository = this._database.sequelize.getRepository(WalletPojo)
    }

    async addUser(newUser : UserPojo) : Promise<string> {
        try {
            newUser = await this._userRepository.create(newUser)
            return newUser.userId            
        } catch (error) {
            logger.error(error)
            return error.name
        }
    }

    async getAllUser() : Promise<UserPojo[]> {
        try { 
            return await this._userRepository.findAll()
        } catch (error) {
            logger.error(error)
            return []
        }
    } 

    async getUserById(id : string) : Promise<UserPojo | undefined>{
        try {
            return await this._userRepository.findByPk(id)
        } catch (error) {
            logger.error(error)
            return undefined
        }
    }

    async getWalletById(userId : string, currencyId: string) : Promise<WalletPojo | undefined>{
        try {
            const result = this._walletRepository.findOne({
                where: {
                    userId: userId,
                    currencyId: currencyId
                }})
                if (!!result) {                    
                    return result                    
                } else {
                    return undefined
                }
        } catch (error) {
            logger.error(error)
            return undefined
        }
    }
    
    async getUserByUsernamePass(username : string, password: string) : Promise<UserPojo | undefined>{
        try {
            return await this._userRepository.findOne({
                where: {
                    username: username,
                    password: password
                }})
        } catch (error) {
            logger.error(error)
            return undefined
        }
    }

    async updateUser(userToUpdate : UserPojo) : Promise<string>{
        try { 
            userToUpdate = await this._userRepository.update(userToUpdate, { 
                where: { 
                    userId: userToUpdate.userId
                },
            }); 
            return "Succesfully Update"
         } catch (error) { 
            logger.error(error) 
            return error.toString() 
        } 
    }    

    async updateWallet(walletToUpdate: WalletPojo) : Promise<string>{
        logger.warn(walletToUpdate.userId)
        logger.warn(walletToUpdate.currencyId)
        const result = await this._walletRepository.findOne({
            where: {
                userId: walletToUpdate.userId,
                currencyId: walletToUpdate.currencyId 
            }
        })
        logger.warn(result)
        if (!!result) {
            this._walletRepository.update({
                amount: walletToUpdate.amount
            },{
                where: {
                    userId: walletToUpdate.userId,
                    currencyId: walletToUpdate.currencyId 
                } 
            })
            logger.info("Wallet Updated")
            return "Updated"
        } else {
            this._walletRepository.create(walletToUpdate)
            logger.info("Wallet Created")
            return "Created"
            
        }
    }
}