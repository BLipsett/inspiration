import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
const user = "BrianL/";
class TodoService {
  constructor() {}

  async getTodos() {
    let res = await sandboxApi.get("todos");
    console.log(res.data);
  }

  async addTodo(formData) {
    let user = formData.user;
    let res = await sandboxApi.post(user + "/todos", formData);
    console.log("todo responce", res.data);
    let newTodo = new Todo(res.data);

    ProxyState.todos = [newTodo, ...ProxyState.todos];
    console.log("your todo items", ProxyState.todos);
    ProxyState.todos = ProxyState.todos;
  }
}

export const todoService = new TodoService();
