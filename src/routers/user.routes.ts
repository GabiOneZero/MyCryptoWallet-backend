import { userController } from './../controllers/user.controller';
import express from "express"

const router = express.Router()

router.post('/add', userController.addUser)
router.get('/get/all', userController.getAllUser)
router.get('/get/:id', userController.getUserById)
router.post('/login', userController.getUserByUsernamePass)
router.put('/update', userController.updateUser)
router.get('/get/wallet/:userId/:currencyId', userController.getWalletById)
router.put('/update/wallet', userController.updateWallet)

export default router
module.exports = router