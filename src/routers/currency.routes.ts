import { currencyController } from './../controllers/currency.controller';
import express from "express"

const router = express.Router()

router.post('/add', currencyController.addCurrency)
router.get('/all', currencyController.getAllCurrencies)
router.get('/get/:id', currencyController.getCurrencyById)
router.put('/update', currencyController.updateCurrency)

export default router
module.exports = router