"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const functions_utils_1 = require("../utils/functions.utils");
const logs_utils_1 = __importDefault(require("../utils/logs.utils"));
const user_service_1 = require("./../services/user.service");
const userService = new user_service_1.UserService();
exports.userController = {
    addUser: (req, res) => {
        try {
            const newUser = req.body;
            userService.addUser(newUser).then((result) => {
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
    getUserByUsername: (req, res) => {
        try {
            const username = req.params.username;
            logs_utils_1.default.info("<<<HELLO>>> " + username);
            userService.getUserByName(username)
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
            const walletToUpdate = (0, functions_utils_1.parseInputWalletIntoDTO)(req.body);
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
