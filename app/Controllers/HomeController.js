import { ProxyState } from "../AppState.js"
import { homeService } from "../Services/HomeService.js"

function _drawHome() {
    let home = ProxyState.home
    let template = ""
    home.forEach(c => template += c.Template)
    document.getElementById("home").innerHTML = template
}
export default class HomeController {
    constructor() {
        _drawHome()
        ProxyState.on("home", _drawHome)
    }

    createHome(event) {
        event.preventDefault();
        let form = event.target
        let rawHome = {
            // @ts-ignore
            style: form.style.value,
            // @ts-ignore
            floors: form.floors.value,
            // @ts-ignore
            levels: form.levels.value,
            // @ts-ignore
            color: form.color.value,
            // @ts-ignore
            bedrooms: form.bedrooms.value,
            // @ts-ignore
            img: form.imgUrl.value,
            // @ts-ignore
            bathrooms: form.bathrooms.value,
            // @ts-ignore
            acreage: form.acreage.value,

            // @ts-ignore
            price: form.price.value,

        }
        homeService.createHome(rawHome)
    }

    delete(id) {
        homeService.removeHome(id)
    }

    bid(id) {
        event.preventDefault();
        let form = event.target
        // @ts-ignore
        let bid = form.bid.value
        homeService.bid(id, bid)
    }
}