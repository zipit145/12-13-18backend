
exports.up = function (knex, Promise) {
    return knex.schema.createTable('transactions', (account) => {
        account.increments('id')
        account.string('title')
        account.boolean('status')
        account.integer('amount')
        account.integer('account_id').references('id').inTable('accounts').onDelete('cascade')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('transactions')
};