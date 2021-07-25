import { ProxyState } from "../AppState.js"
import { clocksService } from "../Services/ClocksService.js"

function _draw() {
  document.getElementById('clock').innerHTML = this.timeT
  document.getElementById('clock-msg').innerText = timeMessage
}
function startTime() {

  const today = new Date();
  let amPm = 'AM'
  let timeMessage = ''
  let h = today.getHours();
  if (h >= 22 && h < 5) {
    timeMessage = 'Good Night'
  } else if (h >= 5 && h < 12) {
    timeMessage = 'Good Morning'
  } else if (h >= 12 && h < 6) {
    timeMessage = 'Good Afternoon'
  } else {
    timeMessage = 'Good Evening'
  };
  if (h == 0) {
    h = 12
  } else if (h > 12) {
    h = h - 12
    amPm = 'PM'
  }

  let m = today.getMinutes();
  let s = today.getSeconds();
  m = clocksService.checkTime(m);
  s = clocksService.checkTime(s);
  let timeT = h + ":" + m + ":" + s + " " + amPm
  document.getElementById('clock-msg').innerText = timeMessage
  document.getElementById('clock').innerHTML = timeT;
  setTimeout(startTime, 1000);


}





export default class ClocksController {
  constructor() {
    ProxyState.on('clock', _draw)
    startTime()

  }





}