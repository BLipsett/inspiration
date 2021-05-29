import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote() {
  document.getElementById("quote").innerHTML = ProxyState.quote.quoteTemplate;
}
export default class QuoteController {
  constructor() {
    console.log("quote controller");
    this.getQuotes();
    ProxyState.on("quote", _drawQuote);
  }

  getQuotes() {
    quoteService.getQuotes();
  }
}
