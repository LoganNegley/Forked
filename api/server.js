const express = require('express');
const UserRouter = require('../Users/user-router');
const RecipeRouter = require('../Recipes/recipes_router');
const CartRouter = require('../Cart/cart-router');
const PublicRecipes = require('../PublicRecipes/public-recipes-router');
const IngredientRouter = require('../Ingredients/ingredient-router');
const CartItemsRouter = require('../CartItems/cartItems-router');
const FavoritesRouter = require('../Favorites/favorites-router');
const StepsRouter = require('../Steps/steps-router');
const AuthRouter = require('../auth/auth-router');

const server = express();

// Middleware
server.use(express.json());


// Routers
server.use('/users', UserRouter);
server.use('/recipes', RecipeRouter);
server.use('/carts', CartRouter);
server.use('/public/recipes', PublicRecipes);
server.use('/ingredient', IngredientRouter);
server.use('/cart/item', CartItemsRouter);
server.use('/favorites', FavoritesRouter);
server.use('/steps', StepsRouter);
server.use('/register', AuthRouter);

// Routes
server.get('/', (req, res) =>{
res.status(200).json({message: 'Api up and running'})
});

module.exports = server
