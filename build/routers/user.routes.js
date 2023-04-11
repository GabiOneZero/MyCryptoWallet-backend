"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./../controllers/user.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/add', user_controller_1.userController.addUser);
router.get('/get/all', user_controller_1.userController.getAllUser);
router.get('/get/:id', user_controller_1.userController.getUserById);
router.get('/getbyname/:username', user_controller_1.userController.getUserByUsername);
router.put('/update', user_controller_1.userController.updateUser);
router.put('/update/wallet', user_controller_1.userController.updateWallet);
exports.default = router;
module.exports = router;
