const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');

//server endpoints
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

const sessionConfig = {
    name:'users-session',
    secret:'this is my secret',
    cookie:{
        maxAge:1000 * 60 * 60,
        secure:false,
        httpOnly:true,
    },
    resave:false,
    saveUninitalized:false,
};

// Global Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));


// Routers
server.use('/users', UserRouter);
server.use('/recipes', RecipeRouter);
server.use('/carts', CartRouter);
server.use('/public/recipes', PublicRecipes);
server.use('/ingredient', IngredientRouter);
server.use('/cart/item', CartItemsRouter);
server.use('/favorites', FavoritesRouter);
server.use('/steps', StepsRouter);
server.use('/auth', AuthRouter);

// Routes
server.get('/', (req, res) =>{
res.status(200).json({message: 'Api up and running'})
});

module.exports = server
