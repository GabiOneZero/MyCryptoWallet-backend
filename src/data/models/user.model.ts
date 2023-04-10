import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { DECIMAL, STRING } from 'sequelize'
import { v4 as uuid } from 'uuid';
import { WalletPojo } from './wallet.model';

@Table ({    
    tableName: 'users',
    schema: 'bootcamp_schema',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})
export class UserPojo extends Model{
    @Column({
        type: STRING,
        primaryKey: true,
        autoIncrement: true,
        field: 'userId'
    })
    userId: string = uuid()

    @Column({
        type: STRING,
        field: 'username'
    })
    username : string

    @Column({
        type: STRING,
        field: 'fullname'
    })
    fullname : string

    @Column({
        type: STRING,
        field: 'password'
    })
    password: string

    @Column({
        type: STRING,
        field: 'email'
    })
    email: string

    @Column({
        type: DECIMAL,
        field: 'balance',
    })
    balance: number

    @HasMany(() => WalletPojo)
    wallet: WalletPojo[]    

}