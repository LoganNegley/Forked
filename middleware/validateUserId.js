const usersModel = require('../Users/user-model');


//Custom middleware
function validateUserId(req,res, next){
    const {id} = req.params;

    usersModel.findUserById(id)
    .then(user =>{
        if(user.length > 0){
            req.user = user
            next()
        }else{
            res.status(404).json({message:'Unable to find user with that ID'})
        }
    })
    .catch(err =>{
        res.status(500).json({errorMessage:'Failed request for user with that Id'})
    })
};

module.exports = validateUserId