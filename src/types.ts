export class UserDto {
	userId: string
    username: string
    fullname: string
    password: string
    email: string
    balance: number
}

export class WalletDto{
    userId: string
    currencyId: string
    amount: number
}

export class CurrencyDto{
    currencyId: string
    currencyName: string
    value: number
    acronym: string
    icon: string
}

export type NewUserDto = Omit<UserDto, 'userId'>
export type NewWalletDto = Omit<WalletDto, 'walletId'>
export type NewCurrencyDto = Omit<CurrencyDto, 'currencyId'>