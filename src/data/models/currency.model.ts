import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { DECIMAL, STRING } from 'sequelize'
import { v4 as uuid } from 'uuid';
import { WalletPojo } from './wallet.model';

@Table ({    
    tableName: 'currencies',
    schema: 'mcw',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})
export class CurrencyPojo extends Model{
    @Column({
        type: STRING,
        primaryKey: true,
        autoIncrement: true,
        field: 'currencyId'
    })
    currencyId: string = uuid()

    @Column({
        type: STRING,
        field: 'currencyName'
    })
    currencyName : string

    @Column({
        type: DECIMAL,
        field: 'value'
    })
    value : number

    @Column({
        type: STRING,
        field: 'acronym'
    })
    acronym: string

    @Column({
        type: STRING,
        field: 'icon'
    })
    icon: string

    @HasMany(() => WalletPojo)
    wallet: WalletPojo[] 
}