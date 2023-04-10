import { NewUserDTO, NewWalletDTO, UserDTO } from "../types"
import { UserRepository } from "../data/repositories/user.repository"
import { UserPojo } from "../data/models/user.model"
import { WalletPojo } from "../data/models/wallet.model"

export class UserService {
    _userRepository : UserRepository

    constructor(){
        this._userRepository = new UserRepository()
    }

    async addUser(user: NewUserDTO) : Promise<string> {
        const userPojo : UserPojo = this.parseDTOIntoPojo(user)
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
                let userAsDTO = this.parsePojoIntoDTO(userAsPojo)
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
                return this.parsePojoIntoDTO(userAsPojo)
            }else{
                return undefined
            }
        }).catch(error =>{
            console.error(error)
            throw error            
        })
        return userPromise
    }

    async getUserByName(username: string) : Promise<UserDTO | undefined> {
        const userPromise = await this._userRepository.getUserByUsername(username).then(userAsPojo =>{
            if (!!userAsPojo) {
                return this.parsePojoIntoDTO(userAsPojo)
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
        const userPojo : UserPojo = this.parseDTOIntoPojo(userUpdated)
        const userPromise = await this._userRepository.updateUser(userPojo).then(userId => {
            return userId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return userPromise
    }

    async updateWallet(walletUpdated: NewWalletDTO) : Promise<string> {
        const walletPojo : WalletPojo = this.parseWalletDTOIntoPojo(walletUpdated)
        const walletPromise = await this._userRepository.updateWallet(walletPojo).then(walletId => {
            return walletId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return walletPromise
    }

    parsePojoIntoDTO(userPojo : UserPojo) : UserDTO {
        return userPojo as UserDTO
    }

    parseDTOIntoPojo(userDTO : NewUserDTO) : UserPojo {
        return userDTO as UserPojo
    }

    parseWalletDTOIntoPojo(walletDTO : NewWalletDTO) : WalletPojo {
        return walletDTO as WalletPojo
    }
}