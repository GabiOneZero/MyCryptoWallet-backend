import { CurrencyDTO, NewCurrencyDTO } from "../types"
import { CurrencyRepository } from "../data/repositories/currency.repository"
import { CurrencyPojo } from "../data/models/currency.model"
import { parseCurrencyDTOIntoPojo, parseCurrencyPojoIntoDTO } from "../utils/functions.utils"

export class CurrencyService {
    _currencyRepository : CurrencyRepository

    constructor(){
        this._currencyRepository = new CurrencyRepository()
    }

    async addCurrency(currency: NewCurrencyDTO) : Promise<number> {
        const currencyPojo : CurrencyPojo = parseCurrencyDTOIntoPojo(currency)
        const currencyPromise = await this._currencyRepository.addCurrency(currencyPojo).then(currencyId => {
            return currencyId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return currencyPromise
    }
    
    async getAllCurrencies() : Promise<CurrencyDTO[]> {
        const currenciesPromise = await this._currencyRepository.getAllCurrencies().then(currenciesAsPojo => {
            let currenciesAsDTO : CurrencyDTO[] = []
            currenciesAsPojo.forEach(currencyAsPojo =>{
                let currencyAsDTO = parseCurrencyPojoIntoDTO(currencyAsPojo)
                currenciesAsDTO.push(currencyAsDTO)
            })
            return currenciesAsDTO
        }).catch(error => {
            console.error(error)
            throw error
        })
        return currenciesPromise
    }

    async getCurrencyById(id: string) : Promise<CurrencyDTO | undefined> {
        const currencyPromise = await this._currencyRepository.getCurrencyById(id).then(currencyAsPojo =>{
            if (!!currencyAsPojo) {
                return parseCurrencyPojoIntoDTO(currencyAsPojo)
            }else{
                return undefined
            }
        }).catch(error =>{
            console.error(error)
            throw error            
        })
        return currencyPromise
    }

    async updateCurrency(currencyUpdated: NewCurrencyDTO) : Promise<string> {
        const currencyPojo : CurrencyPojo = parseCurrencyDTOIntoPojo(currencyUpdated)
        const currencyPromise = await this._currencyRepository.updateCurrency(currencyPojo).then(currencyId => {
            return currencyId
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return currencyPromise
    }
}