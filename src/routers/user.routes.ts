import { userController } from './../controllers/user.controller';
import express from "express"

const router = express.Router()

router.post('/add', userController.addUser)
router.get('/all', userController.getAllUser)
router.get('/get/:id', userController.getUserById)
router.get('/getbyname/:username', userController.getUserByUsername)
router.put('/update', userController.updateUser)
router.put('/update/wallet', userController.updateWallet)

export default router
module.exports = router