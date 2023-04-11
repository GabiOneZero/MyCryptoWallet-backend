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
exports.CurrencyService = void 0;
const currency_repository_1 = require("../data/repositories/currency.repository");
const functions_utils_1 = require("../utils/functions.utils");
class CurrencyService {
    constructor() {
        this._currencyRepository = new currency_repository_1.CurrencyRepository();
    }
    addCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            const currencyPojo = (0, functions_utils_1.parseCurrencyDTOIntoPojo)(currency);
            const currencyPromise = yield this._currencyRepository.addCurrency(currencyPojo).then(currencyId => {
                return currencyId;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return currencyPromise;
        });
    }
    getAllCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const currenciesPromise = yield this._currencyRepository.getAllCurrencies().then(currenciesAsPojo => {
                let currenciesAsDTO = [];
                currenciesAsPojo.forEach(currencyAsPojo => {
                    let currencyAsDTO = (0, functions_utils_1.parseCurrencyPojoIntoDTO)(currencyAsPojo);
                    currenciesAsDTO.push(currencyAsDTO);
                });
                return currenciesAsDTO;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return currenciesPromise;
        });
    }
    getCurrencyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const currencyPromise = yield this._currencyRepository.getCurrencyById(id).then(currencyAsPojo => {
                if (!!currencyAsPojo) {
                    return (0, functions_utils_1.parseCurrencyPojoIntoDTO)(currencyAsPojo);
                }
                else {
                    return undefined;
                }
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return currencyPromise;
        });
    }
    updateCurrency(currencyUpdated) {
        return __awaiter(this, void 0, void 0, function* () {
            const currencyPojo = (0, functions_utils_1.parseCurrencyDTOIntoPojo)(currencyUpdated);
            const currencyPromise = yield this._currencyRepository.updateCurrency(currencyPojo).then(currencyId => {
                return currencyId;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return currencyPromise;
        });
    }
}
exports.CurrencyService = CurrencyService;
