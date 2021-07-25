import { ProxyState } from "../AppState.js"
import { clocksService } from "../Services/ClocksService.js"

function _draw() {
  document.getElementById('clock').innerHTML = this.timeT
}






export default class ClocksController {
  constructor() {
    ProxyState.on('clock', _draw)

    this.startTime()

  }
  startTime() {

    const today = new Date();
    let amPm = 'AM'
    let h = today.getHours();
    if (h > 12) {
      h = h - 12
      amPm = 'PM'
    }

    let m = today.getMinutes();
    let s = today.getSeconds();
    m = clocksService.checkTime(m);
    s = clocksService.checkTime(s);
    let timeT = h + ":" + m + ":" + s + " " + amPm
    document.getElementById('clock').innerHTML = timeT;
    setTimeout(this.startTime, 1000);


  }




}