import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _drawCar() {
  let cars = ProxyState.cars
  let template = ""
  cars.forEach(c => template += c.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarsController {
  constructor() {
    _drawCar()
    ProxyState.on("cars", _drawCar)
  }

  createCar() {
    event.preventDefault();
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      img: form.imgUrl.value
    }
    carsService.createCar(rawCar)
  }

  delete(id) {
    carsService.removeCar(id)
  }

  bid(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    let bid = form.bid.value
    carsService.bid(id, bid)
  }
}