export class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this.user = data.user;
    this.id = data.id;
  }

  get TodoTemplate() {
    return /*html*/ `
    <div>
       <input type="checkbox" name="complete"
       ${this.completed == true ? "checked" : "false"}
          
           onclick = "app.todoController.clicked('${this.id}')"
              
          />
        <label for="complete"></label>
      <p>${this.description}</p>
      <i class="far fa-trash-alt" onclick="app.todoController.deleteTodo('${
        this.id
      }')">
      </i>
    </div>
      `;
  }
}
