import { CurrencyPojo } from "../data/models/currency.model"
import { UserPojo } from "../data/models/user.model"
import { WalletPojo } from "../data/models/wallet.model"
import { CurrencyDTO, NewCurrencyDTO, NewUserDTO, NewWalletDTO, UserDTO, WalletDTO } from "../types"

export const parseUserPojoIntoDTO = (userPojo : UserPojo) : UserDTO => {
    return userPojo as UserDTO
}

export const parseUserDTOIntoPojo = (userDTO : NewUserDTO) : UserPojo => {
    return userDTO as UserPojo
}

export const parseWalletDTOIntoPojo = (walletDTO : NewWalletDTO) : WalletPojo => {
    return walletDTO as WalletPojo
}

export const parseInputWalletIntoDTO = (newWallet: any) : WalletDTO => {
        const newWalletDTO : WalletDTO = {
            userId: newWallet.userId,
            currencyId: newWallet.curremcyId,
            amount: newWallet.amount
        }
        return newWalletDTO
}

export const parsePojoIntoDTO = (currencyPojo : CurrencyPojo) : CurrencyDTO => {
    return currencyPojo as CurrencyDTO
}

export const parseDTOIntoPojo = (currencyDTO : NewCurrencyDTO) : CurrencyPojo => {
    return currencyDTO as CurrencyPojo
}