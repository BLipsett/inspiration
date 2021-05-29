import BackgroundController from "./Controllers/BackgroundController.js";
import ClockController from "./Controllers/ClockController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  clockController = new ClockController();

  todoController = new TodoController();

  weatherController = new WeatherController();

  quoteController = new QuoteController();

  backgroundController = new BackgroundController();
}

window["app"] = new App();
