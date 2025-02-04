const { db } = require('../db/drizzle');
const { users } = require('../db/schema');
const User = require('../../core/domain/UserModel');
const { eq } = require('drizzle-orm');

class UserRepository {
    constructor(){}

    async create(userData){
        const [newUser] = await db.insert(users)
            .values(userData)
            .returning()
            .catch(error => {
                console.log('Error creating user: \n ', error)
                throw new Error('Error creating user: \n ', error)
            })
        
        console.log('New user created: ', newUser)
        return new User(newUser)
    }

    async findByEmail(email){
        const [user] = await db.query.users
            .findFirst({ where:  eq(users.email, email)})

        return user ? new User(user) : null
    }

    async update (email, userData){
        const [updatedUser] = await db
            .update(users)
            .set(userData)
            .where(eq(users.email, email))
            .returning()
        
        return updatedUser ? new User(updatedUser) : null
    }

    async list(){
        const allUsers = await db.select().from(users)
        return allUsers.map(user => new User(user))
    }
}

module.exports = UserRepository;
