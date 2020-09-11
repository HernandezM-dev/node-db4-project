
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl=>{
      tbl.increment().unsigned().notNullable();
      tbl.text('Recipe_Name', 128).notNullable();
      tbl.integer('ingredient_list_Id').unsigned().notNullable().references('id').inTable('ingredient_list').onUpdate('RESTRICT').onDelete('RESTRICT');
  })
  .createTable('ingredients', tbl=>{
      tbl.increment().unsigned().notNullable();
      tbl.text('Ingredient_Name', 128).notNullable();
  })
  .createTable('ingredients_list', tbl=>{
      tbl.increment().unsigned().notNullable();
      tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onUpdate('RESTRICT').onDelete('RESTRICT');
      tbl.integer('quantity').unsigned().notNullable();
      tbl.integer('recipie_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('RESTRICT').onDelete('RESTRICT');
  })
  .createTable('steps', tbl=>{
      tbl.increment().unsigned().notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('RESTRICT').onDelete('RESTRICT');
      tbl.integer('step_number').unsigned().notNullable();
      tbl.text('instructions', 128).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('ingredients_list')
    .dropTableIfExists('steps');
};
