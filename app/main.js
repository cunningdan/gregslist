import CarsController from "./Controllers/CarsController.js";
import HomeController from "./Controllers/HomeController.js";
import JobController from "./Controllers/JobController.js";

class App {
  carsController = new CarsController()
  homeController = new HomeController()
  jobController = new JobController()
}

window["app"] = new App();
