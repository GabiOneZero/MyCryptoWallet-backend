import { NewUserDTO, NewWalletDTO, UserDTO, WalletDTO } from "../types"
import { UserRepository } from "../data/repositories/user.repository"
import { UserPojo } from "../data/models/user.model"
import { WalletPojo } from "../data/models/wallet.model"
import { parseUserDTOIntoPojo, parseUserPojoIntoDTO, parseWalletDTOIntoPojo, parseWalletPojoIntoDTO } from "../utils/functions.utils"
import logger from "../utils/logs.utils"

export class UserService {
    _userRepository : UserRepository

    constructor(){
        this._userRepository = new UserRepository()
    }

    async addUser(user: NewUserDTO) : Promise<string> {
        const userPojo : UserPojo = parseUserDTOIntoPojo(user)
        const userPromise = await this._userRepository.addUser(userPojo).then(userId => {
            return userId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return userPromise
    }
    
    async getAllUsers() : Promise<UserDTO[]> {
        const usersPromise = await this._userRepository.getAllUser().then(usersAsPojo => {
            let usersAsDTO : UserDTO[] = []
            usersAsPojo.forEach(userAsPojo =>{
                let userAsDTO = parseUserPojoIntoDTO(userAsPojo)
                usersAsDTO.push(userAsDTO)
            })
            return usersAsDTO
        }).catch(error => {
            console.error(error)
            throw error
        })
        return usersPromise
    }

    async getUserById(id: string) : Promise<UserDTO | undefined> {
        const userPromise = await this._userRepository.getUserById(id).then(userAsPojo =>{
            if (!!userAsPojo) {
                return parseUserPojoIntoDTO(userAsPojo)
            }else{
                return undefined
            }
        }).catch(error =>{
            console.error(error)
            throw error            
        })
        return userPromise
    }

    async getWalletById(userId: string, currencyId: string) : Promise<WalletDTO | undefined> {
        const walletPromise = await this._userRepository.getWalletById(userId, currencyId).then(walletAsPojo =>{
            if (!!walletAsPojo) {
                return parseWalletPojoIntoDTO(walletAsPojo)
            }else{
                return undefined
            }
        }).catch(error =>{
            console.error(error)
            throw error            
        })
        return walletPromise
    }

    async getUserByUsernamePass(username: string, password: string) : Promise<UserDTO | undefined> {
        const userPromise = await this._userRepository.getUserByUsernamePass(username, password).then(userAsPojo =>{
            if (!!userAsPojo) {
                return parseUserPojoIntoDTO(userAsPojo)
            }else{
                return undefined
            }
        }).catch(error =>{
            console.error(error)
            throw error            
        })
        return userPromise
    }

    async updateUser(userUpdated: NewUserDTO) : Promise<string> {
        const userPojo : UserPojo = parseUserDTOIntoPojo(userUpdated)
        const userPromise = await this._userRepository.updateUser(userPojo).then(userId => {
            return userId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return userPromise
    }

    async updateWallet(walletUpdated: NewWalletDTO) : Promise<string> {
        const walletPojo : WalletPojo = parseWalletDTOIntoPojo(walletUpdated)
        logger.warn("UserService")
        logger.warn(walletUpdated)
        const walletPromise = await this._userRepository.updateWallet(walletPojo).then(walletId => {
            return walletId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return walletPromise
    }
}