const userService = require('../../core/services/UserService');

const registerUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.log('Error creating user: ', error)
        res.status(500).json({ message: error.message })
    }
}

const searchUserEmail = async (req, res) => {
    try {
        const {email} = req.body
        const user = await userService.getUserByEmail(email)

        if (!user) res.status(404).json({ message: 'User not found' })
        
        res.status(200).json(user)
    } catch (error) {
        console.log('Error searching user: ', error)
        res.status(500).json({ message: error.message })
    }
}
 
const modifyUser = async (req, res) => {
        try {
            const {email} = req.body
            const updatedUser = await userService.updateUser(email, req.body)

            if (!updatedUser) res.status(404).json({ message: 'User not found' })
            res.status(200).json(updatedUser)
        } catch (error) {
            console.log('Error modifying user: ', error)
            res.status(500).json({ message: error.message })
        }
}

const userList = async (req, res) => {
        try {
            const user = await userService.getAllUsers()
            res.status(200).json(user)
        } catch (error) {
            console.log('Error getting user list: ', error)
            res.status(500).json({ message: error.message })
        }
}


module.exports = {
    registerUser,
    searchUserEmail,
    modifyUser,
    userList
}