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
exports.UserRepository = void 0;
const user_model_1 = require("../models/user.model");
const user_db_config_1 = require("../config/user.db.config");
const wallet_model_1 = require("../models/wallet.model");
const logs_utils_1 = __importDefault(require("../../utils/logs.utils"));
class UserRepository {
    constructor() {
        this._database = {};
        this._database = (0, user_db_config_1.connect)();
        this._userRepository = this._database.sequelize.getRepository(user_model_1.UserPojo);
        this._walletRepository = this._database.sequelize.getRepository(wallet_model_1.WalletPojo);
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newUser = yield this._userRepository.create(newUser);
                return newUser.userId;
            }
            catch (error) {
                logs_utils_1.default.error(error);
                return error.name;
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findAll();
            }
            catch (error) {
                logs_utils_1.default.error(error);
                return [];
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findByPk(id);
            }
            catch (error) {
                logs_utils_1.default.error(error);
                return undefined;
            }
        });
    }
    getWalletById(userId, currencyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = this._walletRepository.findOne({
                    where: {
                        userId: userId,
                        currencyId: currencyId
                    }
                });
                if (!!result) {
                    return result;
                }
                else {
                    return undefined;
                }
            }
            catch (error) {
                logs_utils_1.default.error(error);
                return undefined;
            }
        });
    }
    getUserByUsernamePass(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findOne({
                    where: {
                        username: username,
                        password: password
                    }
                });
            }
            catch (error) {
                logs_utils_1.default.error(error);
                return undefined;
            }
        });
    }
    updateUser(userToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                userToUpdate = yield this._userRepository.update(userToUpdate, {
                    where: {
                        userId: userToUpdate.userId
                    },
                });
                return "Succesfully Update";
            }
            catch (error) {
                logs_utils_1.default.error(error);
                return error.toString();
            }
        });
    }
    updateWallet(walletToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            logs_utils_1.default.warn(walletToUpdate.userId);
            logs_utils_1.default.warn(walletToUpdate.currencyId);
            const result = yield this._walletRepository.findOne({
                where: {
                    userId: walletToUpdate.userId,
                    currencyId: walletToUpdate.currencyId
                }
            });
            logs_utils_1.default.warn(result);
            if (!!result) {
                this._walletRepository.update({
                    amount: walletToUpdate.amount
                }, {
                    where: {
                        userId: walletToUpdate.userId,
                        currencyId: walletToUpdate.currencyId
                    }
                });
                logs_utils_1.default.info("Wallet Updated");
                return "Updated";
            }
            else {
                this._walletRepository.create(walletToUpdate);
                logs_utils_1.default.info("Wallet Created");
                return "Created";
            }
        });
    }
}
exports.UserRepository = UserRepository;
