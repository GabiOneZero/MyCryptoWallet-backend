import logger from "../utils/logs.utils"
import { UserService } from "./../services/user.service"

const userService: UserService = new UserService()

export const userController = {
	addUser: (req: any, res: any) => {
		try {
			const newUser = req.body
			userService.addUser(newUser).then((result) => {
				logger.info("User added")
				logger.info(result)
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
	getAllUser: (_req: any, res: any) => {
		userService
			.getAllUsers()
			.then((result) => {
				res.json(result)
			})
			.catch((error) => {
				logger.warn("Se ha producido un error")
				logger.error(error)
				res.sendStatus(500)
			})
	},
	getUserById: (req: any, res: any) => {
		try {
			const userId = req.params.id
			userService.getUserById(userId)
            .then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
	getWalletById: (req: any, res: any) => {
		try {
			const userId = req.params.userId
			const currencyId = req.params.currencyId
			userService.getWalletById(userId, currencyId)
            .then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
	getUserByUsernamePass: (req: any, res: any) => {
		try {
			const username = req.body.username
			const password = req.body.password
			logger.info("<<<HELLO>>> " + username)
			userService.getUserByUsernamePass(username, password)
            .then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
	updateUser: (req: any, res: any) => {
		try {
			const userToUpdate = req.body
			userService.updateUser(userToUpdate).then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},

    updateWallet: (req: any, res: any) => {
		try {
			const walletToUpdate = req.body
			logger.warn("UserController")
			logger.warn(req.body)
			userService.updateWallet(walletToUpdate).then((result) => {
				res.json(result)
			})
		} catch (error) {
			logger.error(error)
			res.sendStatus(500)
		}
	},
    
}
    