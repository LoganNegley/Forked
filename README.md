# Not-Your-Grandmas-Recipe-Box
An application to store recipes 

# Back-end endpoints
************************************
--Users--
  Get all users - HTTP request GET----('/users/')
  Find a user by user Id - HTTP request GET----('/users/:id')
  Update user by user Id - HTTP request PUT-----('/users/:id')
  Add user - HTTP request POST ---('/users/')
  Delete user by user ID -HTTP request DELETE----('/user/:id')
 ************************************
--Recipes--
  Get all recipes - HTTP request GET----('/recipes/')
  Find recipe by recipe ID - HTTP request GET----('/recipes/:recipeId')
  Get recipe by user Id - HTTP request GET----('/recipes/user/:id')
  Add recipe to user by user Id - HTTP request POST---('/recipes/user/:id')
  Update recipe by recipe Id - HTTP request PUT---('/recipes/:id')
  Delete recipe by recipe Id - HTTP request Delete----('/recipes/:recipeId')
 *****************************************
--Ingredients--
  Get ingredients by recipe Id - HTTP request GET----('/ingredient/recipe/:recipeId')
  Get ingredient by ingredient Id - HTTP request GET-----(''/ingredient/:id)
  Add ingredient by recipe Id - HTTP request POST----('/ingredient/recipe/:id')
  Delete ingredient by ingredient Id - HTTP request DELETE----('/ingredient/:id')
  Update ingredient by ingredient ID - HTTP request PUT----('/ingredient/:id')
 *****************************************
--Steps--
  Get all steps - HTTP request GET----('/steps/')
  Get step by step ID - HTTP request GET----('/steps/:id')
  Get steps for a recipe by recipe Id - HTTP GET----('/steps/recipe/:id')
  Add step to recipe by recipe Id - HTTP POST------('/steps/recipe/:id')
  Delete step by step Id - HTTP DELETE------('/steps/:id')
  Update step by step Id - HTTP PUT----('/steps/:id')
 ******************************************
--Favorite Recipes--
  Get all favorite recipes - HTTP GET----('/favorites/')
  Get favorite by recipe Id - HTTP GET----('/favorites/recipe/:id')
  Get a users favorite recipe by user Id - HTTP GET----('/favorites/user/:id')
  Add favorite recipe -HTTP POST---('/user/:id/recipe/:recipeId')
  Delete favorite by recipe Id - HTTP DELETE---(''/recipe/:id'')
 *******************************************
--Public Recipes--
  Get all public recipes - HTTP GET-----('/public/recipes/')
  Get public recipes for user by user Id -HTTP GET----('/public/recipes/user/:id')
  Add recipe to public recipes by ID - HTTP PUT---('/public/recipes/:id')
  Delete public recipe by public Id - HTTP DELETE---('/public/recipe/:id')
 *********************************************
--Cart--
  Get user cart by user ID - HTTP GET--------('/carts/user/:id')
  Get all carts for users - HTTP GET------('/carts/')
 *********************************************
--Cart Items--
  Get all cart items - HTTP GET--------('/cart/item/')
  Get cart item by cart item ID - HTTP GET----('/cart/item/:id')
  Get items in cart by user id - HTTP GET-----('/cart/item/user/:id')
  Add ingredient to users cart by ID - HTTP POST-----('/user/:id/ingredient/:ingredientId')
  Delete ingredient from cart - HTTP DELETE-------('/user/:userId/ingredient/:id')

 

