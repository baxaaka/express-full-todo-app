const express = require('express') ;

const app = express()



require("dotenv").config()

const cookie = require("cookie-parser");

const cors = require("cors")

const path =require("path")
const router = require('./src/router/todo.router.js');
const authRouter = require('./src/router/auth.router.js');

const PORT = process.env.PORT ||9000

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "/src/views"))

app.use(express.urlencoded({extended:"utf-8"}))
app.use(express.text())
app.use(express.json())
app.use(cookie())
app.use(cors())

app.use(router ,authRouter)   
 
app.use("*",(_,res)=>{
    res.redirect("/register")
    })
    


app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT} runing  `);
})