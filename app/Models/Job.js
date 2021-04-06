
export default class Job{
  constructor({id, company, description, jobTitle, hours, rate}){
    this.id=id
    this.company=company
    this.description=description
    this.jobTitle=jobTitle
    this.hours=hours
    this.rate=rate
  }

  get Template(){
    return `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${this.company}: ${this.jobTitle}</h5>
      <p class="card-text">Hours per Week: ${this.hours} | Hourly Rate: $${this.rate}</p>
      <p class="card-text">Job Duties: ${this.desription}</p>
    </div>
    <div class="px-3 pb-3 d-flex justify-content-between">
    <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
</div>
  </div>
    `
  }
}