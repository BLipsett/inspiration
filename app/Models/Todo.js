export class Todo {
  constructor(data) {
    this.completed = false;
    this.description = data.description;
    this.user = data.user;
  }

  get TodoTemplate() {
    return `
    
      <p>${this.description}</p>
      
      `;
  }
}
