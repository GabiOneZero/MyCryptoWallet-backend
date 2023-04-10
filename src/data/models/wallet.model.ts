import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { DECIMAL, STRING } from 'sequelize'
import { CurrencyPojo } from './currency.model';
import { UserPojo } from './user.model';

@Table ({    
    tableName: 'wallets',
    schema: 'mcw',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})
export class WalletPojo extends Model{
    @ForeignKey(() => CurrencyPojo)
    @Column({
        type: STRING,
        primaryKey: true,
        field: 'currencyId'
    })
    currencyId: string

    @BelongsTo(() => CurrencyPojo)
    currency: CurrencyPojo;

    @ForeignKey(() => UserPojo)
    @Column({
        type: STRING,
        primaryKey: true,
        field: 'userId'
    })
    userId : string

    @BelongsTo(() => UserPojo)
    user: UserPojo;

    @Column({
        type: DECIMAL,
        field: 'amount'
    })
    amount : number    
}