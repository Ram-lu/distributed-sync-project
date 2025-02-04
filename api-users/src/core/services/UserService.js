const UserRepository = require('../../infrastructure/respositories/UserRepository');
const { validationResult } = require('express-validator');

const userRepository = new UserRepository

class UserService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async createUser(userData){
        const errors = validationResult(userData);
        if (!errors.isEmpty()) throw new Error({ message: 'Validation failed', errors: errors.array() })
        
        const existingUser = await this.userRepository.findByEmail(userData.email)
        if (existingUser) throw new Error('User already exists')
        
        return await this.userRepository.create(userData)
    }

    async getUserByEmail(email){
        return await this.userRepository.findByEmail(email)
    }

    async updateUser(email, userData){
        const errors = validationResult(userData);
        if (!errors.isEmpty()) throw new Error({ message: 'Validation failed', errors: errors.array() })

        if (userData.email){
            const existingUser = await this.userRepository.findByEmail(userData.email)
            if (existingUser && existingUser.email !== email)
                throw new Error ('Email already in use')
        }

        return await this.userRepository.update(email, userData)
    }

    async getAllUsers(){
        return await this.userRepository.list()
    }
}

const userService = new UserService(userRepository)

module.exports = userService