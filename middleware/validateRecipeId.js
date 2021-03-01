const recipeModel = require('../Recipes/recipes_model');

function validateRecipeId(req, res, next){
    const {id} = req.params;

    recipeModel.findRecipeById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            req.body = recipe;
            next()
        }else{
            res.status(404).json({message:'Recipe with that Id does not exist'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to find recipe with ID'})
    })
};

module.exports = validateRecipeId;