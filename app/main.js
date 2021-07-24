import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TempsController from "./Controllers/TempsController.js";
class App {

  imagesController = new ImagesController();
  quotesController = new QuotesController();

  tempsController = new TempsController();
}

window["app"] = new App();
