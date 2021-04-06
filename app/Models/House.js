export default class House{
  constructor({id, price, bedrooms, bathrooms, levels, year,imgUrl}){
    this.id = id
    this.price=price
    this.bedrooms= bedrooms
    this.bathrooms = bathrooms
    this.levels=levels
    this.year=year
    this.imgUrl=imgUrl
  }

  get Template() {

  return `
  <div class="col-md-6 mb-3">
      <div class="card shadow">
      <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <p class="card-text">Beds: ${this.bedrooms} | Bath: ${this.bathrooms} | Levels: ${this.levels} | Price: $${this.price.toFixed(2)}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.housesController.bidHouse('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
  `
}
}