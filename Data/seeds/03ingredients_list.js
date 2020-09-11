
exports.seed = function(knex) {
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_number: 1, instructions: "This is the 1st step"},
        {id: 2, recipe_id: 1, step_number: 2, instructions: "This is the 2nd step"},
        {id: 3, recipe_id: 1, step_number: 3, instructions: "This is the 3rd step"},
        {id: 4, recipe_id: 1, step_number: 4, instructions: "This is the 4th step"},
        {id: 5, recipe_id: 1, step_number: 5, instructions: "This is the 5th step"},
        {id: 6, recipe_id: 2, step_number: 1, instructions: "This is the 1st step"},
        {id: 7, recipe_id: 2, step_number: 2, instructions: "This is the 2nd step"},
        {id: 8, recipe_id: 2, step_number: 3, instructions: "This is the 3rd step"},
        {id: 9, recipe_id: 2, step_number: 4, instructions: "This is the 4th step"},
        {id: 10, recipe_id: 2, step_number: 5, instructions: "This is the 5th step"},
      ]);
};
