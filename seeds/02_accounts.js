
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          acct_name: 'Danes piggy bank',
          bank_name: 'piggy banks express',
          acct_type: 'roth ira',
          user_id: 1
        },
        {
          acct_name: 'Gregs gold min',
          bank_name: 'hole in the dirt',
          acct_type: 'matress monies',
          user_id: 2
        },
      ]);
    });
};
