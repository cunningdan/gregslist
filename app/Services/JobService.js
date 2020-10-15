import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"

class JobService {
    constructor() {
    }
    removeJob(id) {
        let temp = ProxyState.job
        let jobIndex = temp.findIndex(i => i.id == id)
        temp.splice(jobIndex, 1)
        ProxyState.job = temp
    }

    createJob(rawJob) {
        let temp = ProxyState.job
        temp.push(new Job(rawJob))
        ProxyState.job = temp
    }

}
export const jobService = new JobService()


































