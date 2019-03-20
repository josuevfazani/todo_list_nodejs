  //Requiring Mongoose
  const mongoose = require("mongoose")
  const Schema = mongoose.Schema

  const db = mongoose.connection

  //If an connection error occurs
  db.on("error", console.error.bind(console, "Connection error"))

  //Called when DB connection is successful
  db.on("open", () => {
    console.log("Mongoose connection successful")
  })

  db.on("close", () => {
    console.log("Mongoose disconnection successful")
  })

  //Creating the todo schema
  var todo = mongoose.model('Todos', new Schema(
    {
      todo: String
    }
  ))

  //Open the database connection, executes the function from the arguments and closes the connection
  function connect(){
    mongoose.connect("mongodb+srv://josuevfazani:jojo2407@josuevfazani-kaykh.mongodb.net/node-todo-list?retryWrites=true", {useNewUrlParser: true})
  }



  //mongodb://localhost:27017/todo-list
  //Exporting the todo variabe
  module.exports = {
    Todo: todo,
    db: db,
    connect: connect
  }
