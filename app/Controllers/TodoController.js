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
    _drawTodos();
  }

  getTodo;

  addTodo(event) {
    event.preventDefault();
    let form = event.target;

    let formData = {
      completed: false,
      description: form.description.value,
      user: "BrianL",
    };

    console.log(formData);

    todoService.addTodo(formData);
  }
}
