import { generateId } from "../Utils/GenerateId.js"
export default class Job {
    constructor({ title, field, specialty, minExperience, description, id }) {
        this.title = title
        this.field = field
        this.specialty = specialty
        this.minExperience = minExperience
        this.description = description
        this.id = generateId()
    }
    get Template() {
        return /*html*/ `<div class="col-4">
    <div class="card">
    <div class="card-body">
        <h4 class="card-title">${this.title} <br> ${this.field} </h4>
        <h5 class="bold">${this.specialty}</h5>
        <p class="card-text">${this.minExperience} <br> ${this.description}</p>
        <div class="form-group p-1">
        <button class="btn btn-danger" onclick="app.jobController.delete('${this.id}')">Delete</button>
    </div>
    </div>
    </div>
</div>`
    }
}