export class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this.user = data.user;
    this.id = data.id;
  }

  get TodoTemplate() {
    return /*html*/ `
    <div class="col-12 d-flex flex-row align-items-center text-center p-2">
       <input class="p-2" type="checkbox" name="complete"
       ${this.completed == true ? "checked" : "false"}
          
           onclick = "app.todoController.clicked('${this.id}')"
              
          />
        <label for="complete"></label>
      <span><p class="mb-0 p-2">${this.description}</p></span>
      <i class="far fa-trash-alt ml-auto p-2" onclick="app.todoController.deleteTodo('${
        this.id
      }')">
      </i>
    </div>
      `;
  }
}
