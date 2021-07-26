import { tempsService } from "../Services/TempsService.js"

export default class Temp {
  constructor({ temp, feels_like, temp_min, temp_max, icon, main, weather }) {
    this.temp = temp || main.temp
    this.feelsLike = feels_like || main.feels_like
    this.tempMin = temp_min || main.temp_min
    this.tempMax = temp_max || main.temp_max
    this.icon = icon || weather[0].icon


    this.tempF = `${Math.floor((this.temp - 273.15) * 9 / 5 + 32)}°F`
    this.tempC = `${Math.floor((this.temp - 273.15))}°C`
    this.celsius = false
    this.displayTemp = this.tempF
  }

  changeTemp() {

    if (this.celsius == false) {
      this.displayTemp = this.tempC
    }
    else {
      this.displayTemp = this.tempF
    }
    this.celsius = !this.celsius

  }

  get Template() {
    return `
    <span onClick="app.tempsController.changeTemp()">${this.displayTemp}</span><img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" width="50" height="50" alt="" loading="lazy"></img>
      `
  }
}
