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
exports.CurrencyRepository = void 0;
const currency_model_1 = require("../models/currency.model");
const currency_db_config_1 = require("../config/currency.db.config");
class CurrencyRepository {
    constructor() {
        this._database = {};
        this._database = (0, currency_db_config_1.connect)();
        this._currencyRepository = this._database.sequelize.getRepository(currency_model_1.CurrencyPojo);
    }
    addCurrency(newCurrency) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newCurrency = yield this._currencyRepository.create(newCurrency);
                return newCurrency.id;
            }
            catch (error) {
                console.error(error);
                return -1;
            }
        });
    }
    getAllCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._currencyRepository.findAll();
            }
            catch (error) {
                console.error(error);
                return [];
            }
        });
    }
    getCurrencyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._currencyRepository.findByPk(id);
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
    updateCurrency(newCurrencyToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newCurrencyToUpdate = yield this._currencyRepository.update(newCurrencyToUpdate, {
                    where: {
                        currencyId: newCurrencyToUpdate.currencyId
                    },
                });
                return newCurrencyToUpdate.currencyId;
            }
            catch (error) {
                console.error(error);
                return error.toString();
            }
        });
    }
}
exports.CurrencyRepository = CurrencyRepository;
