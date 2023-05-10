const express = require("express")
const { getRegister, getLogin, postRegister, postLogin } = require("../controller/auth.js")


const authRouter = express.Router()


authRouter
.get('/register' , getRegister )
.get('/login' , getLogin)
.post("/register" , postRegister)
.post("/login" , postLogin)




module.exports = authRouter