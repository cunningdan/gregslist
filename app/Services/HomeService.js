import { ProxyState } from "../AppState.js"
import Home from "../Models/Home.js"

class HomeService {
    constructor() {
    }
    bid(id, bidAmount) {
        let temp = ProxyState.home
        if (bidAmount > 0) {
            let home = temp.find(c => c.id == id)
            home.price += parseInt(bidAmount)
            ProxyState.home = temp
        }
    }
    removeHome(id) {
        let temp = ProxyState.home
        let homeIndex = temp.findIndex(c => c.id == id)
        temp.splice(homeIndex, 1)
        ProxyState.home = temp
    }

    createHome(rawHome) {
        let temp = ProxyState.home
        temp.push(new Home(rawHome))
        ProxyState.home = temp
    }

}

































export const homeService = new HomeService()