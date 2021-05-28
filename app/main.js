import BackgroundController from "./Controllers/BackgroundController.js";
import ClockController from "./Controllers/ClockController.js";

class App {
  clockController = new ClockController();

  backgroundController = new BackgroundController();
}

window["app"] = new App();
