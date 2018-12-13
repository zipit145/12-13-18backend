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
    getAllAccounts() {
        return db.select('*').from('accounts')
    },
    getAccountById(id) {
        return db('accounts').where('id', id)
    },
    createAccount(newAccount) {
        return db('accounts').insert(newAccount).returning('*')
    },
    editAccount(id, account) {
        return db('accounts').where('id', id).update(account).returning('*')
    },
    deleteAccount(id) {
        return db('accounts').where('id', id).delete()
    },
}
