"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../data/repositories/user.repository");
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = this.parseDTOIntoPojo(user);
            const userPromise = yield this._userRepository.addUser(userPojo).then(userId => {
                return userId;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersPromise = yield this._userRepository.getAllUser().then(usersAsPojo => {
                let usersAsDTO = [];
                usersAsPojo.forEach(userAsPojo => {
                    let userAsDTO = this.parsePojoIntoDTO(userAsPojo);
                    usersAsDTO.push(userAsDTO);
                });
                return usersAsDTO;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return usersPromise;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository.getUserById(id).then(userAsPojo => {
                if (!!userAsPojo) {
                    return this.parsePojoIntoDTO(userAsPojo);
                }
                else {
                    return undefined;
                }
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getUserByName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository.getUserByUsername(username).then(userAsPojo => {
                if (!!userAsPojo) {
                    return this.parsePojoIntoDTO(userAsPojo);
                }
                else {
                    return undefined;
                }
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    updateUser(userUpdated) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = this.parseDTOIntoPojo(userUpdated);
            const userPromise = yield this._userRepository.updateUser(userPojo).then(userId => {
                return userId;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    updateWallet(walletUpdated) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletPojo = this.parseWalletDTOIntoPojo(walletUpdated);
            const walletPromise = yield this._userRepository.updateWallet(walletPojo).then(walletId => {
                return walletId;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return walletPromise;
        });
    }
    parsePojoIntoDTO(userPojo) {
        return userPojo;
    }
    parseDTOIntoPojo(userDTO) {
        return userDTO;
    }
    parseWalletDTOIntoPojo(walletDTO) {
        return walletDTO;
    }
}
exports.UserService = UserService;
