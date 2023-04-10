"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDTOIntoPojo = exports.parsePojoIntoDTO = exports.parseInputWalletIntoDTO = exports.parseWalletDTOIntoPojo = exports.parseUserDTOIntoPojo = exports.parseUserPojoIntoDTO = void 0;
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
const parsePojoIntoDTO = (currencyPojo) => {
    return currencyPojo;
};
exports.parsePojoIntoDTO = parsePojoIntoDTO;
const parseDTOIntoPojo = (currencyDTO) => {
    return currencyDTO;
};
exports.parseDTOIntoPojo = parseDTOIntoPojo;
