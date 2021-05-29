import BackgroundController from "./Controllers/BackgroundController.js";
import ClockController from "./Controllers/ClockController.js";
import QuoteController from "./Controllers/QuoteController.js";

class App {
  clockController = new ClockController();

  quoteController = new QuoteController();

  backgroundController = new BackgroundController();
}

window["app"] = new App();
