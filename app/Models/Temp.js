export default class Temp {
  constructor({ temp, feels_like, temp_min, temp_max, icon, main, weather }) {
    this.temp = temp || main.temp
    this.feelsLike = feels_like || main.feels_like
    this.tempMin = temp_min || main.temp_min
    this.tempMax = temp_max || main.temp_max
    this.icon = icon || weather.icon


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
      <h2 onClick="app.tempsController.changeTemp()">${this.displayTemp}</h2>
      `
  }
}
