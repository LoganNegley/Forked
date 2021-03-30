module.exports = (req,res, next) =>{
    if(req.session && req.session.user){
        next();
    }else{
        res.status(403).json({message:'not authorized'}) //must be logged in
    }
};

//method checking if req session objec exists and if user object is present--indicating a user has successfully logged in with creds