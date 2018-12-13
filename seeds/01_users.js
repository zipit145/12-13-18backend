
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Dane',
          first_name: 'Dane',
          last_name: 'Parke',
          email: 'danep@gmail.com',
          password: 'password'
        },
        {
          username: 'Greg',
          first_name: 'Greg',
          last_name: 'Forney',
          email: 'gforney@gmail.com',
          password: 'password'
        },
        {
          username: 'Ryan',
          first_name: 'Ryan',
          last_name: 'St.Germain',
          email: 'ryangermain@gmail.com',
          password: 'password'
        },
        {
          username: 'Jess',
          first_name: 'Jess',
          last_name: 'Markgraf',
          email: 'jessmark@gmail.com',
          password: 'password'
        },
      ]);
    });
};
