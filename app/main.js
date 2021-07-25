import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TempsController from "./Controllers/TempsController.js";
import ClocksController from "./Controllers/ClocksController.js";
import TodosController from "./Controllers/TodosController.js";
class App {


  imagesController = new ImagesController();
  tempsController = new TempsController();
  quotesController = new QuotesController();
  todosController = new TodosController();
  clocksController = new ClocksController();


}

window["app"] = new App();
