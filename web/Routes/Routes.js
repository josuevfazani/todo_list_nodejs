module.exports = (app,Port) => {

  const todos = require(Path+"/web/Controllers/TodosController.js")
  const home = require(Path+"/web/Controllers/HomeController.js")

  //The express app is listening to the port that is stored in the Port variable
  app.listen(Port, () => {

    //Sends a message to the console to show that the express server is working
    console.log("Running on port "+Port)

    app.route("/")
      .get(home); //This is the Home route, calls the home method from HomeController

    app.route("/todos")
      .get(todos.show) //Route that returns all todos from database, using the show method from TodosController
      .post(todos.create) //Route to Create an new todo, using the create method from TodosController

    app.route("/todos/:id")
      .get(todos.show) //Route that returns one specific todo from database using the id, using the show method from the TodosController
      .put(todos.update) //Route to update an todo based on it's id, using the update method from TodosController
      .delete(todos.delete) //Route to delete an todo based on it's id, using the delete method from TodosController

    })
}
