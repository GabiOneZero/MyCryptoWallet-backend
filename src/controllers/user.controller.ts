import { parseInputWalletIntoDTO } from "../utils/functions.utils"
import { UserService } from "./../services/user.service"

const userService: UserService = new UserService()

export const userController = {
	addUser: (req: any, res: any) => {
		try {
			const newUser = req.body
			userService.addUser(newUser).then((result) => {
				res.json(result)
			})
		} catch (error) {
			console.log(error)
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
				console.log("Se ha producido un error")
				console.log(error)
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
			console.log(error)
			res.sendStatus(500)
		}
	},
	getUserByUsername: (req: any, res: any) => {
		try {
			const username = req.params.username
			console.log("<<<HELLO>>> " + username)
			userService.getUserByName(username)
            .then((result) => {
				res.json(result)
			})
		} catch (error) {
			console.log(error)
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
			console.log(error)
			res.sendStatus(500)
		}
	},

    updateWallet: (req: any, res: any) => {
		try {
			const walletToUpdate = parseInputWalletIntoDTO(req.body)
			userService.updateWallet(walletToUpdate).then((result) => {
				res.json(result)
			})
		} catch (error) {
			console.log(error)
			res.sendStatus(500)
		}
	},
    
}
    