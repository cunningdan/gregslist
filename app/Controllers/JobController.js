import { ProxyState } from "../AppState.js"
import { jobService } from "../Services/JobService.js"

function _drawJob() {
    let job = ProxyState.job
    let template = ""
    job.forEach(c => template += c.Template)
    document.getElementById("job").innerHTML = template
}

export default class CarsController {
    constructor() {
        _drawJob()
        ProxyState.on("job", _drawJob)
    }

    createJob() {
        event.preventDefault();
        let form = event.target
        let rawJob = {
            // @ts-ignore
            title: form.title.value,
            // @ts-ignore
            field: form.field.value,
            // @ts-ignore
            specialty: form.specialty.value,
            // @ts-ignore
            minExperience: form.minExperience.value,
            // @ts-ignore
            description: form.description.value,

        }
        jobService.createJob(rawJob)
    }

    delete(id) {
        jobService.removeJob(id)
    }
}