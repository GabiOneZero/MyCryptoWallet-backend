"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyController = void 0;
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
            console.log(error);
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
            console.log("Se ha producido un error");
            console.log(error);
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
            console.log(error);
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
            console.log(error);
            res.sendStatus(500);
        }
    },
};
