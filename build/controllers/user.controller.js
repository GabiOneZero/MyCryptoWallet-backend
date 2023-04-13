"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const logs_utils_1 = __importDefault(require("../utils/logs.utils"));
const user_service_1 = require("./../services/user.service");
const userService = new user_service_1.UserService();
exports.userController = {
    addUser: (req, res) => {
        try {
            const newUser = req.body;
            userService.addUser(newUser).then((result) => {
                logs_utils_1.default.info("User added");
                logs_utils_1.default.info(result);
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    getAllUser: (_req, res) => {
        userService
            .getAllUsers()
            .then((result) => {
            res.json(result);
        })
            .catch((error) => {
            logs_utils_1.default.warn("Se ha producido un error");
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        });
    },
    getUserById: (req, res) => {
        try {
            const userId = req.params.id;
            userService.getUserById(userId)
                .then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    getWalletById: (req, res) => {
        try {
            const userId = req.params.userId;
            const currencyId = req.params.currencyId;
            userService.getWalletById(userId, currencyId)
                .then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    getUserByUsernamePass: (req, res) => {
        try {
            const username = req.body.username;
            const password = req.body.password;
            logs_utils_1.default.info("<<<HELLO>>> " + username);
            userService.getUserByUsernamePass(username, password)
                .then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    updateUser: (req, res) => {
        try {
            const userToUpdate = req.body;
            userService.updateUser(userToUpdate).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    updateWallet: (req, res) => {
        try {
            const walletToUpdate = req.body;
            logs_utils_1.default.warn("UserController");
            logs_utils_1.default.warn(req.body);
            userService.updateWallet(walletToUpdate).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
};
