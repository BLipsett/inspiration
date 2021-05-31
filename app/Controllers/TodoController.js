import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";

function _drawTodos() {
  let template = "";
  let todoElem = document.getElementById("saved-todos");
  ProxyState.todos.forEach((t) => (template += t.TodoTemplate));

  todoElem.innerHTML = template;
}
export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos);
    this.getName();
    _drawTodos();
    //this.getTodos();
  }

  clicked(id) {
    todoService.clicked(id);
    todoService.updateTodo(id);
  }

  getName() {
    todoService.getName();
  }

  deleteTodo(id) {
    console.log("delete", id);
    todoService.deleteTodo(id);
  }

  addName(event) {
    event.preventDefault();
    let form = event.target;
    let userName = {
      name: form.userName.value,
    };
    todoService.addName(userName);
    //this.getName();
  }

  getTodos() {
    let user = ProxyState.activeUser.name;
    console.log("user from proxystate for todos", user);
    if (user) {
      todoService.getTodos(user);
    }
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;

    let formData = {
      completed: false,
      description: form.description.value,
      //user: "BrianL",
    };

    console.log(formData);

    todoService.addTodo(formData);
    form.reset();
  }
}
