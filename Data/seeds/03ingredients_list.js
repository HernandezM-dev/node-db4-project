
exports.seed = function(knex) {
  return knex('ingredients_list').insert([
  {ingredient_id: 1, quantity: 10, recipe_id: 1},
  {ingredient_id: 2, quantity: 9, recipe_id: 1},
  {ingredient_id: 3, quantity: 8, recipe_id: 1},
  {ingredient_id: 4, quantity: 7, recipe_id: 2},
  {ingredient_id: 5, quantity: 6, recipe_id: 2},
  {ingredient_id: 1, quantity: 5, recipe_id: 2},
  ]);
};
