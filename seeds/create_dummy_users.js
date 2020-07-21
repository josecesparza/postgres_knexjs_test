
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jose', email:'jose@gmail.com'},
        {username: 'john', email: 'john@gmail.com'}
      ]);
    });
};
