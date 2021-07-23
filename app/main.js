import ImagesController from "./Controllers/ImagesController.js";
class App {

  imagesController = new ImagesController();

}

window["app"] = new App();
