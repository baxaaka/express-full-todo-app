const Io = require("../utils/Io.js");
const { Auth } = require("../modules/auth.module.js");
const auth = new Io("./db/auth.json");
const { v4: uuid} = require('uuid');
const idd =uuid()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const getRegister = (req, res) => {
  res.render("register");
};

const getLogin = (req, res) => {
  res.render("login");
};

const postRegister = async (req, res) => {
    try {
        const { username, password } = req.body;

        const users = await auth.read();
      
        const findUser = users.find((el) => el.username.toLowerCase()== username.toLowerCase());
      
        if (findUser) {
          return res.send("bunday username mavjud");
        } else {
          const validPassword = await bcrypt.hash(password, 5);
          
          const newRegister = new Auth(username, validPassword , idd);
      
          const allRegister = users.length ? [...users, newRegister] : [newRegister];
            
      
          const token = jwt.sign(newRegister.username , process.env.Secret_Key)
          res.cookie("token",token)
      
        
          auth.write(allRegister);
          res.redirect("/login");
        }
        // if(users.length){ 
        // }
    } catch (error) {
        console.log(error);
    }
 
};

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const users = await auth.read();
 
  const findLUser = users.find((el) => el.username.toLowerCase()  == username.toLowerCase());

//   const findPassword = users.find((el) => el.password == password);

//   const logPassword = await bcrypt.compare(findPassword);

//   if (logPassword) {
//     return res.redirect("/todo");
//   } else res.send("pasword hato yana urinip kuring");
//   // console.log(findUser);
  if (findLUser) {
    return res.redirect("/todo");
  } else res.send("user topilmadi");
};

module.exports = { getRegister, getLogin, postRegister, postLogin };
