const { verify } = require("../utils/jwt.js");


const isAuth =(req,res,next)=>{
try{
    
    const {token} = req.cookies;
    if(!token){
        res.redirect("/register")
    }
    
    const isVerified = verify(token)

    req.user = isVerified;

    next()
}catch(error){
res.redirect("/register")
}

}
module.exports = {isAuth}