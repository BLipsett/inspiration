export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.content = data.content;
  }

  get quoteTemplate() {
    return `
    <div class="quote-text text-light">
      <p>${this.content} ~ ${this.author}</p>
    </div>
    
    `;
  }
}
