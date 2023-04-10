"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
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
            console.log(error);
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
            console.log("Se ha producido un error");
            console.log(error);
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
            console.log(error);
            res.sendStatus(500);
        }
    },
    getUserByUsername: (req, res) => {
        try {
            const username = req.params.username;
            console.log("<<<HELLO>>> " + username);
            userService.getUserByName(username)
                .then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            console.log(error);
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
            console.log(error);
            res.sendStatus(500);
        }
    },
    updateWallet: (req, res) => {
        try {
            const walletToUpdate = parseInputWalletIntoDTO(req.body);
            userService.updateWallet(walletToUpdate).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
};
const parseInputWalletIntoDTO = (newWallet) => {
    const newWalletDTO = {
        userId: newWallet.userId,
        currencyId: newWallet.curremcyId,
        amount: newWallet.amount
    };
    return newWalletDTO;
};
