exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex('comments').del();
  return knex.raw('TRUNCATE TABLE comments RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { user_id: 1, post_id: 7, body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
        ]);
    });
};