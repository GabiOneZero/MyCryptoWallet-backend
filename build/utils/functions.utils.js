"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCurrencyDTOIntoPojo = exports.parseCurrencyPojoIntoDTO = exports.parseInputWalletIntoDTO = exports.parseWalletDTOIntoPojo = exports.parseUserDTOIntoPojo = exports.parseUserPojoIntoDTO = void 0;
const parseUserPojoIntoDTO = (userPojo) => {
    return userPojo;
};
exports.parseUserPojoIntoDTO = parseUserPojoIntoDTO;
const parseUserDTOIntoPojo = (userDTO) => {
    return userDTO;
};
exports.parseUserDTOIntoPojo = parseUserDTOIntoPojo;
const parseWalletDTOIntoPojo = (walletDTO) => {
    return walletDTO;
};
exports.parseWalletDTOIntoPojo = parseWalletDTOIntoPojo;
const parseInputWalletIntoDTO = (newWallet) => {
    const newWalletDTO = {
        userId: newWallet.userId,
        currencyId: newWallet.curremcyId,
        amount: newWallet.amount
    };
    return newWalletDTO;
};
exports.parseInputWalletIntoDTO = parseInputWalletIntoDTO;
const parseCurrencyPojoIntoDTO = (currencyPojo) => {
    return currencyPojo;
};
exports.parseCurrencyPojoIntoDTO = parseCurrencyPojoIntoDTO;
const parseCurrencyDTOIntoPojo = (currencyDTO) => {
    return currencyDTO;
};
exports.parseCurrencyDTOIntoPojo = parseCurrencyDTOIntoPojo;
