import Car from "./Models/Car.js"
import Home from "./Models/Home.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({ make: "Honda", model: "Accord", year: 2002, price: 5000, img: "./assets/img/car.jpg", description: "This is a red honda." })]
  /** @type {Home[]} */
  home = [new Home({ style: "rustic", color: "White", floors: "Treated Hard-Wood", levels: "2", acreage: 10, neighborhood: "BridgeStone", img: "../assets/img/home.jpg", bedrooms: "4", bathrooms: "3.5", price: "200,000" })]
  /** @type {Job[]} */
  job = [new Job({ title: "Full-Stack Web Developer", field: "Web Development", specialty: "specialized in Back-End development", minExperience: "1yr experience required", description: "You will build websites", id: 0 })]
}






export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
