import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


//Private
function _draw() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(j => {
    template += j.Template
  })
  document.getElementById('jobs').innerHTML = template
}

//Public
export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw);
    this.getJobs()
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }

  async createJob() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newJob = {
        // @ts-ignore
        company: form.company.value,
        description: form.description.value,
        jobTitle: form.title.value,
        hours: form.hours.value,
        rate: form.rate.value

      }
      await jobsService.createJob(newJob)

      // @ts-ignore
      form.reset()

      $('#new-job-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  deleteJob(id) {
    try {
      jobsService.deleteJob(id)
    } catch (error) {
      console.error(error)
    }
  }

}