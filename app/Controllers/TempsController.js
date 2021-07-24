import { ProxyState } from "../AppState.js";
import { tempsService } from "../Services/TempsService.js"

function _draw() {
  document.getElementById('temp').innerHTML = ProxyState.temp.Template
}
export default class TempsController {
  constructor() {
    ProxyState.on("temp", _draw);

    _draw()

    this.getNewTemp()
  }
  async changeTemp() {
    try {
      await tempsService.changeTemp();
      _draw()
    } catch (error) {

    }
  }

  async getNewTemp() {
    try {
      await tempsService.getNewTemp()
    } catch (error) {
      console.error('could not get temp' + error)
    }
  }
}