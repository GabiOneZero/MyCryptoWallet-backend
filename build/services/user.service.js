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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../data/repositories/user.repository");
const functions_utils_1 = require("../utils/functions.utils");
const logs_utils_1 = __importDefault(require("../utils/logs.utils"));
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = (0, functions_utils_1.parseUserDTOIntoPojo)(user);
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
                    let userAsDTO = (0, functions_utils_1.parseUserPojoIntoDTO)(userAsPojo);
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
                    return (0, functions_utils_1.parseUserPojoIntoDTO)(userAsPojo);
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
    getWalletById(userId, currencyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletPromise = yield this._userRepository.getWalletById(userId, currencyId).then(walletAsPojo => {
                if (!!walletAsPojo) {
                    return (0, functions_utils_1.parseWalletPojoIntoDTO)(walletAsPojo);
                }
                else {
                    return undefined;
                }
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return walletPromise;
        });
    }
    getUserByUsernamePass(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository.getUserByUsernamePass(username, password).then(userAsPojo => {
                if (!!userAsPojo) {
                    return (0, functions_utils_1.parseUserPojoIntoDTO)(userAsPojo);
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
            const userPojo = (0, functions_utils_1.parseUserDTOIntoPojo)(userUpdated);
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
            const walletPojo = (0, functions_utils_1.parseWalletDTOIntoPojo)(walletUpdated);
            logs_utils_1.default.warn("UserService");
            logs_utils_1.default.warn(walletUpdated);
            const walletPromise = yield this._userRepository.updateWallet(walletPojo).then(walletId => {
                return walletId;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return walletPromise;
        });
    }
}
exports.UserService = UserService;
