
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {id: 1, name: 'apple'},
        {id: 2, name: 'banana'},
        {id: 3, name: 'blueberry'}
        {id: 4, name: 'blueberry'}
        {id: 5, name: 'bread'}
      ]);
};
