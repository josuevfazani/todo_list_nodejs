# Todo List

A simple todo list developed with [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/) and deployed at [Heroku](https://www.heroku.com/).

The following Node.js modules where used:
- Express
- Mongoose
- Body-Parser
- EJS

The project uses rest api to get, post, alter and delete data from a MongoDB database, that is hosted in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). The main route "https://josuevfazani-todo.herokuapp.com/" responds with the user interface for the api.

Routes:
- /todos (GET request): Returns all todos.
- /todos (POST request): Creates a new todo.
- /todos/(insert id of todo here) (GET request): Returns a specific todo.
- /todos/(insert id of todo here) (PUT request): Alters a specific todo.
- /todos/(insert id of todo here) (DELETE request): Deletes a specific todo.
- / (GET request): The home page with a interface for the todo list.
