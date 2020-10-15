import { generateId } from "../Utils/GenerateId.js"
export default class Home {
    constructor({ style, color, floors, levels, acreage, neighborhood, img, bathrooms, bedrooms, price }) {
        this.style = style || 'N/A'
        this.color = color || 'N/A'
        this.floors = floors || 'N/A'
        this.levels = levels || 'N/A'
        this.acreage = acreage || 'N/A'
        this.neighborhood = neighborhood || 'N/A'
        this.img = img
        this.bathrooms = bathrooms
        this.bedrooms = bedrooms
        this.price = price
        this.id = generateId()
    }
    get Template() {
        return /*html*/ `<div class="col-4">
    <div class="card">
    <img class="card-img-top img-fluid" src="${this.img}" alt=""/>
    <div class="card-body">
        <h4 class="card-title">${this.floors} flooring <br> ${this.bedrooms} beds ${this.bathrooms} baths</h4>
        <p class="card-text">$${this.price} ${this.acreage} acres</p>
        <div class="form-group p-1">
        <button class="btn btn-success" type="submit" >Bid</button>
        <button class="btn btn-danger" onclick="app.homeController.delete('${this.id}')">Delete</button>
    </div>
    </div>
    </div>
</div>`
    }
}