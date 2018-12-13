const db = require('./database-connection')
module.exports = {
    getAllUsers() {
        return db.select('*').from('users')
    },
    getUserById(id) {
        return db('users').where('id', id)
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*')
    },
    editUser(id, user) {
        return db('users').where('id', id).update(user).returning('*')
    },
    deleteUser(id) {
        return db('users').where('id', id).delete()
    },
}
