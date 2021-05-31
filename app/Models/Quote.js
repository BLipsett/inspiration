export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.content = data.content;
  }

  get quoteTemplate() {
    return `
    <div class="quote-text text-light">
      <p>${this.content}</p><p class="author"> ~ ${this.author}</p>
    </div>
    
    `;
  }
}
