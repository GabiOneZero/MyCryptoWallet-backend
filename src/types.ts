export class UserDTO {
	userId: string
    username: string
    fullname: string
    password: string
    email: string
    balance: number
}

export class WalletDTO{
    userId: string
    currencyId: string
    amount: number
}

export class CurrencyDTO{
    currencyId: string
    currencyName: string
    value: number
    acronym: string
    icon: string
}

export type NewUserDTO = Omit<UserDTO, 'userId'>
export type NewWalletDTO = Omit<WalletDTO, 'walletId'>
export type NewCurrencyDTO = Omit<CurrencyDTO, 'currencyId'>