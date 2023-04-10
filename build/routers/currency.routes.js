"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currency_controller_1 = require("./../controllers/currency.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/add', currency_controller_1.currencyController.addCurrency);
router.get('/all', currency_controller_1.currencyController.getAllCurrencies);
router.get('/get/:id', currency_controller_1.currencyController.getCurrencyById);
router.put('/update', currency_controller_1.currencyController.updateCurrency);
exports.default = router;
module.exports = router;
