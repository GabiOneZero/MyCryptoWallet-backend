import { UserPojo } from "../models/user.model";
import { connect } from "../config/user.db.config"
import { WalletPojo } from "../models/wallet.model";

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
            return newUser.id            
        } catch (error) {
            console.error(error)
            return error.name
        }
    }

    async getAllUser() : Promise<UserPojo[]> {
        try { 
            return await this._userRepository.findAll()
        } catch (error) {
            console.error(error)
            return []
        }
    } 

    async getUserById(id : string) : Promise<UserPojo | undefined>{
        try {
            return await this._userRepository.findByPk(id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }
    
    async getUserByUsername(username : string) : Promise<UserPojo | undefined>{
        try {
            return await this._userRepository.findAll({
                where: {username: username}})
        } catch (error) {
            console.error(error)
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
            console.error(error) 
            return error.toString() 
        } 
    }    

    async updateWallet(walletToUpdate: WalletPojo) : Promise<string>{
        const result = await this._walletRepository.findOne({
            where: {
                userId: walletToUpdate.userId,
                currencyId: walletToUpdate.currencyId 
            }
        })
        if (!!result) {
            this._walletRepository.update({
                amount: walletToUpdate.amount
            },{
                where: {
                    userId: walletToUpdate.userId,
                    currencyId: walletToUpdate.currencyId 
                } 
            })
            return "Updated"
        } else {
            this._walletRepository.create(walletToUpdate)
            return "Created"
        }
    }
}