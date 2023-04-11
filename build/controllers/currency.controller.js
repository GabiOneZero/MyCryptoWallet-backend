"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyController = void 0;
const logs_utils_1 = __importDefault(require("../utils/logs.utils"));
const currency_service_1 = require("./../services/currency.service");
const currencyService = new currency_service_1.CurrencyService();
exports.currencyController = {
    addCurrency: (req, res) => {
        try {
            const newCurrency = req.body;
            currencyService.addCurrency(newCurrency).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    getAllCurrencies: (_req, res) => {
        currencyService
            .getAllCurrencies()
            .then((result) => {
            res.json(result);
        })
            .catch((error) => {
            logs_utils_1.default.warn("Se ha producido un error");
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        });
    },
    getCurrencyById: (req, res) => {
        try {
            const currencyId = req.params.id;
            currencyService.getCurrencyById(currencyId)
                .then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
    updateCurrency: (req, res) => {
        try {
            const currencyUpdated = req.body;
            currencyService.updateCurrency(currencyUpdated).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            logs_utils_1.default.error(error);
            res.sendStatus(500);
        }
    },
};
