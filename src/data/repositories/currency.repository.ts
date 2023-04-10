import { CurrencyPojo } from "../models/currency.model";
import { connect } from "../config/currency.db.config"

export class CurrencyRepository{
    _database : any = {}
    _currencyRepository : any

    constructor(){
        this._database = connect()
        this._currencyRepository = this._database.sequelize.getRepository(CurrencyPojo)
    }

    async addCurrency(newCurrency : CurrencyPojo) : Promise<number> {
        try {
            newCurrency = await this._currencyRepository.create(newCurrency)
            return newCurrency.id            
        } catch (error) {
            console.error(error)
            return -1
        }
    }

    async getAllCurrencies() : Promise<CurrencyPojo[]> {
        try { 
            return await this._currencyRepository.findAll()
        } catch (error) {
            console.error(error)
            return []
        }
    } 

    async getCurrencyById(id : string) : Promise<CurrencyPojo | undefined>{
        try {
            return await this._currencyRepository.findByPk(id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async updateCurrency(newCurrencyToUpdate : CurrencyPojo) : Promise<string>{
        try { 
            newCurrencyToUpdate = await this._currencyRepository.update(newCurrencyToUpdate, { 
                where: { 
                    currencyId: newCurrencyToUpdate.currencyId
                },
            }); 
            return newCurrencyToUpdate.currencyId
         } catch (error) { 
            console.error(error) 
            return error.toString() 
        } 
    }  
}