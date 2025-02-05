const express = require('express')
const userController = require('../controllers/UserController')
const { check, validationResult } = require('express-validator')

const router = express.Router()

const validateUserRegister = [
    check('name').exists().withMessage('Name is required').notEmpty().withMessage('Name cannot be empty'),
    check('email').exists().withMessage('Email is Required').isEmail().withMessage('Email is not valid')
]

const handleValidationError = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    next()
}

router.post('/register', 
    validateUserRegister, 
    handleValidationError, 
    userController.registerUser)

router.get('/serch_user',
    userController.searchUserEmail
)

router.put('/update_user',
    userController.modifyUser
)

router.get('/list_users',
    userController.userList
)

module.exports = router