
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'apple'},
        {ingredient_name: 'banana'},
        {ingredient_name: 'blueberry'},
        {ingredient_name: 'blueberry'},
        {ingredient_name: 'bread'},
      ]);
};
