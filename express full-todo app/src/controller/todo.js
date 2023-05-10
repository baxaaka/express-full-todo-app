
const Io = require("../utils/Io.js");

const { Tmodule } = require("../modules/todo.modules.js");
const Todo = new Io("./db/todo.json");
// auth
const auth = new Io("./db/auth.json")


const getTodo = async (req, res) => {


//   const {username , password} =req.body
    
//   const users =  await auth.read()

//   console.log(users);
  
//   const findUser = users.find((el)=>el.username ==username)
  
  
//   if(!findUser){
//    return  res.redirect("/login")
//   }

try {
    res.render("todo");
} catch (error) {
    console.log(error);
}
 
}


const getTodoo = async (req, res) => {
    try {
        const data = await Todo.read();
 
        res.send(data);
    } catch (error) {
        console.log(error);
    }
   
  }
  
// router.get("/todoo", async (req, res) => {

// });

const getTodoId = async (req, res) => {
    try {
        const { id } = req.params;

        // console.log(id-1);
      
        const data = await Todo.read();
      
        const da = data[id];
      
        const alda = data.filter((el) => el.id == da.id);
      
        res.send(alda);
    } catch (error) {
        console.log(error);
    }
  
  }
  



// router.get("/todo/:id", async (req, res) => {

// });

const postTodo = async (req, res) => {

    try {
        const { text , isDelete } = req.body;
      
        const data = await Todo.read();
    
        const id = (data[data.length - 1]?.id || 0) + 1;
    
        const datas = new Tmodule(id, text ,isDelete);
    
        const alldatas = data.length ? [...data, datas] : [datas];
        Todo.write(alldatas);
        res.render("todo");
      } catch (error) {
        console.log(error.message);
      }
  }

  const putTodo = async (req, res) => {
    try {
        const {id} = req.params

        const data =await Todo.read()
        const { text } = req.body;
    
        const da = data[id-1]
    
        const dat = data.filter((el)=>{
          if(el.id==id ){
    
            da.text = text ? text :da.text
    
          }
          return el
        })
        
        // console.log(dat);
        Todo.write(dat);
        res.send("updated");
        
    } catch (error) {
        console.log(error);
    }
  
  }
  const deleteTodo = async (req, res) => {

    try {
  
        const { id } = req.params;
    
        const data = await Todo.read();
    
        const da  = data[id-1]
    
        const dat = data.filter((el) => {
          if (el.id == id) {
            da.isDelete = true;
          }
          return el;
        });
    
        
        Todo.write(dat);
    
        res.send("delete success");
      } catch (error) {
        console.log(error);
      }
  }


module.exports={getTodo ,getTodoId ,getTodoo ,postTodo ,putTodo ,deleteTodo}