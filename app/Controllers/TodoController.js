import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";

function _drawTodos() {
  let template = "";
  let todoElem = document.getElementById("saved-todos");
  let todos = ProxyState.todos;
  todos.forEach((t) => (template += t.TodoTemplate));
  todoElem.innerHTML = template;

  //document.getElementById("taskTotal").innerHTML += TaskTotalTemplate;
  _taskNum();
}

function _taskNum() {
  let totalNumElem = document.getElementById("taskTotal");
  let todos = ProxyState.todos;
  let num = 0;
  let complete = 0;
  todos.forEach((t) => {
    if (t.completed == true) {
      complete++;
    }
  });
  for (let i = 0; i < todos.length; i++) {
    num++;
  }
  let template = `
    <p>${complete} / ${num}</p>
  
  `;

  totalNumElem.innerHTML = template;

  console.log(num);
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
    };

    console.log(formData);

    todoService.addTodo(formData);
    form.reset();
  }
}
