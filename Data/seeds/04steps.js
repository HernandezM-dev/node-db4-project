
exports.seed = function(knex) {
  return knex('steps').insert([
    {recipe_id: 1, step_number: 1, instructions: "This is the 1st step"},
    {recipe_id: 1, step_number: 2, instructions: "This is the 2nd step"},
    {recipe_id: 1, step_number: 3, instructions: "This is the 3rd step"},
    {recipe_id: 1, step_number: 4, instructions: "This is the 4th step"},
    {recipe_id: 1, step_number: 5, instructions: "This is the 5th step"},
    {recipe_id: 2, step_number: 1, instructions: "This is the 1st step"},
    {recipe_id: 2, step_number: 2, instructions: "This is the 2nd step"},
    {recipe_id: 2, step_number: 3, instructions: "This is the 3rd step"},
    {recipe_id: 2, step_number: 4, instructions: "This is the 4th step"},
    {recipe_id: 2, step_number: 5, instructions: "This is the 5th step"},
  ]);
};
