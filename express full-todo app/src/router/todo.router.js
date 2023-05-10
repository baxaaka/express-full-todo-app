const express = require("express");
const { getTodo, getTodoo, postTodo, deleteTodo, putTodo } = require("../controller/todo");
const { isAuth } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get('/todo' ,isAuth, getTodo)
.get('/todoo' , getTodoo)
.get('/todo/:id' , getTodo)
.post("/todo" , postTodo)
.put("/todo/:id" , putTodo)
.delete("/todo/:id" , deleteTodo)


module.exports = router;
