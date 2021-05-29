export default class TodoController {
  constructor() {}
  addTodo(event) {
    event.preventDefault();
    todoService.addTodo();
  }
}
