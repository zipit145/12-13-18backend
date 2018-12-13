
exports.seed = function (knex, Promise) {
  return knex('transactions').del()
    .then(function () {
      return knex('transactions').insert([
        {
          title: 'Woooo',
          status: false,
          amount: 30,
          account_id: 1
        },
        {
          title: 'YEAHH',
          status: true,
          amount: 45,
          account_id: 1
        },
        {
          title: 'NOOOO',
          status: true,
          amount: 10,
          account_id: 1
        },
      ]);
    });
};
