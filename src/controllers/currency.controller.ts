import logger from "../utils/logs.utils"
import { CurrencyService } from "./../services/currency.service"

const currencyService: CurrencyService = new CurrencyService()

export const currencyController = {
	addCurrency: (req: any, res: any) => {
		try {
			const newCurrency = req.body
			currencyService.addCurrency(newCurrency).then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
	getAllCurrencies: (_req: any, res: any) => {
		currencyService
			.getAllCurrencies()
			.then((result) => {
				res.json(result)
			})
			.catch((error) => {
				logger.warn("Se ha producido un error")
				logger.error(error)
				res.sendStatus(500)
			})
	},
	getCurrencyById: (req: any, res: any) => {
		try {
			const currencyId = req.params.id
			currencyService.getCurrencyById(currencyId)
            .then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
	updateCurrency: (req: any, res: any) => {
		try {
			const currencyUpdated = req.body
			currencyService.updateCurrency(currencyUpdated).then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
}
