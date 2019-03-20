const todoModel = require(Path+"/web/Models/Index.js").Todo
const db = require(Path+"/web/Models/Index.js").db
const connect = require(Path+"/web/Models/Index.js").connect

//function to reduce repeated process of sending a response
const defaultResponse = function (res,code, type, response) {
  res.status(code)
  res.set("content-type",type)
  res.send(response)
}


module.exports =  {
  //Function that returns the Todos, a list or a single one
  show: (req, res) => {
    connect()
   //checks if is requesting for one specific todo based on the ID or asking for all todos
    if(!req.params.id){ //Get all todos from database
      let query = todoModel.find({})
      query.exec((err, todo_list) => {
        if(err) { //If an error occurs returns a 500 status code and the error
          defaultResponse(res, 500, "application/json", { error: err, data: null })
          db.close()
        }else{ //If it succeeds returns the data and closes connection with db
          defaultResponse(res, 200, "application/json", { error: null, data: todo_list})
          db.close()
        }
      })
    }else{ //Get one todo by Id
      let query = todoModel.findById(req.params.id)
      query.exec((err, todo) => {
        if (err) {
          defaultResponse(res, 500, "application/json", { error: err, data: null })
          db.close()
        }else{
          defaultResponse(res, 200, "application/json", { error: null, data: todo })
          db.close()
        }
      })
    }
  },

  //Function that creates an Todo based on the Post data, and then sends the created todo back.
  create: (req, res) => {
    //checks if the Who and Todo fields are filled
    connect()
      if(!req.body.todo){//If one of them are empty returns a Bad Request status code with an error message
        defaultResponse(res,400,"application/json",{
          error: "todo and who POST request fields must be filled",
          data: null
        })
        db.close()
      }else{//If both fields are filled saves the data at the database

      //Get values from post request usin body parser
      let todo = req.body.todo
      let who = req.body.who
      //Creates new todo
      var newTodo = new todoModel({
        todo: todo
      });
      //saves new todo
      newTodo.save((err, todo) => {
        if(err){
          //if an error occurs returns the error as text and send response code
          defaultResponse(res,500,"application/json",{
            error: err,
            data: null
          })
          db.close()
        }else{
          //Sends the todo object back as json with a 200 status code
          defaultResponse(res,200,"application/json",{
            error: null,
            data: todo
          })
          db.close()
        }
      })
      }
  },

  //Function that deletes an Todo based on the id
  delete: (req, res) => {
    connect()
    todoModel.deleteOne({_id: req.params.id},(err, todo) => {
      if(err){
        defaultResponse(res,500,"application/json",{
          error: err,
          data: null
        })
        db.close()
      }else{
        defaultResponse(res,200,"application/json",{
          error: null,
          data: todo
        })
        db.close()
      }
    })
  },

  update: (req, res) => {
    connect()
    let update = {};
    if(req.body.todo) update.todo = req.body.todo
    if(update){
      todoModel.updateOne({_id: req.params.id}, update, (err, todo) => {
        if(err){
          defaultResponse(res,500,"application/json",{
            error: err,
            data: null
          })
          db.close()
        }else{
          defaultResponse(res,200,"application/json",{
            error: null,
            data: todo
          })
          db.close()
        }
      })
    }else{
      defaultResponse(res,400,"application/json",{
        error: "Who and Todo were empty",
        data: null
      })
      db.close()
    }

  }

}
