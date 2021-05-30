import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import ActiveUser from "../Models/ActiveUser.js";

class TodoService {
  constructor() {}

  clicked(id) {
    let found = ProxyState.todos.filter((t) => t.id == id);
    if (found[0].completed) {
      found[0].completed = false;
    } else if (found[0].completed == false) {
      found[0].completed = true;
    }

    console.log(found);
    ProxyState.todos = ProxyState.todos;

    //event.preventDefault();
    console.log(ProxyState.todos);
  }

  addName(userName) {
    localStorage.setItem("userName", JSON.stringify(userName));
  }

  getName() {
    let user = JSON.parse(localStorage.getItem("userName"));
    ProxyState.activeUser = new ActiveUser(user);
    console.log(ProxyState.activeUser.name);
    if (user) {
      console.log("are you", user);
      document.getElementById("display-todos").classList.remove("d-none");
      document.getElementById("addNameForm").classList.add("d-none");
    }
  }

  async updateTodo(id) {
    let found = ProxyState.todos.find((t) => t.id == id);
    let data = found;
    console.log(data);

    let user = ProxyState.activeUser.name;
    let res = await sandboxApi.put(user + "/todos/" + id, data);
    console.log(res.data);
  }

  async getTodos(user) {
    let res = await sandboxApi.get(user + "/todos");
    ProxyState.todos = res.data.map((t) => new Todo(t));
  }

  async addTodo(formData) {
    let user = ProxyState.activeUser.name;

    let res = await sandboxApi.post(user + "/todos", formData);
    let newTodo = new Todo(res.data);
    ProxyState.todos = [newTodo, ...ProxyState.todos];
    ProxyState.todos = ProxyState.todos;
  }

  async deleteTodo(id) {
    let user = ProxyState.activeUser.name;
    let res = await sandboxApi.delete(user + "/todos/" + id);
    ProxyState.todos = ProxyState.todos.filter((t) => t.id != id);
    ProxyState.todos = ProxyState.todos;
  }
}

export const todoService = new TodoService();
