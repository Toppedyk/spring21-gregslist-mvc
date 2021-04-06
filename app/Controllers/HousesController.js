import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(h => {
    template += h.Template
  })
  document.getElementById('houses').innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw);
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newHouse = {
        // @ts-ignore
        bedrooms: form.beds.value,
        bathrooms: form.bath.value,
        levels: form.levels.value,
        price: Number(form.price.value),
        year: form.year.value,
        imgUrl: form.imgUrl.value
      }
      await housesService.createHouse(newHouse)

      // @ts-ignore
      form.reset()

      $('#new-house-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  deleteHouse(id) {
    try {
      housesService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    housesService.bid(id)
  }

}
