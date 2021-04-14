const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');
const KnexSessionStore = require('connect-session-knex')(session); //a method that recieves the express session object as param

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
    secret:process.env.SESSION_SECRET,
    cookie:{
        maxAge:1000 * 60 * 60,
        secure:false,
        httpOnly:true,
    },
    resave:false,
    saveUninitalized:false,
    //using connect session knex to store session ID's in our database
    store:new KnexSessionStore({
        knex:require('../data/db-config'), //using knex config to point to our database
        tablename:'sessions',
        sidfieldname:'sid', //field name to use in table in db
        createtable:true, //create table if does not exist
        clearInterval: 1000 * 60 * 60 //clear expired session on this interval
    })
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
server.get('/', (req, res) {
res.status(200).json({message: 'Api up and running'})
});

module.exports = server
