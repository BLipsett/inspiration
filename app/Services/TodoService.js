import { sandboxApi } from "./AxiosService.js";

class TodoService {
  constructor() {}

  async GetTodos() {
    let res = await sandboxApi.get(user + "todos");
    console.log(res.data);
  }
  addTodo() {
    sandboxApi.post(user + formData);
  }
}

export const todoService = new TodoService();
