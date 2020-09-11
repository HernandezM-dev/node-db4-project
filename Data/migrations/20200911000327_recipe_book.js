
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl=>{
        tbl.increments()
        tbl.text('recipe_name', 128).notNullable();
      //   tbl.integer('ingredient_list_Id').unsigned().notNullable().references('id').inTable('ingredient_list').onUpdate('RESTRICT').onDelete('RESTRICT');
    })
    .createTable('ingredients', tbl=>{
        tbl.increments()
        tbl.text('ingredient_name', 128).notNullable();
    })
    .createTable('ingredients_list', tbl=>{
        tbl.increments()
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onUpdate('RESTRICT').onDelete('RESTRICT');
        tbl.integer('quantity').unsigned().notNullable();
        tbl.integer('recipe_id').unsigned();
    })
    .createTable('steps', tbl=>{
        tbl.increments()
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
  