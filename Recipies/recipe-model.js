const db = require('../Data/db-config.js');

module.exports = {
    findRecipes,
    findIngredientsList,
    findInstructions,

};

function findRecipes(){
    return db("recipes")
}

function findIngredientsList(recipeId){
    return db("ingredients_list").where({recipe_id: recipeId})
}

function findInstructions(recipeId){
    return db("steps").where({recipe_id: recipeId})
}