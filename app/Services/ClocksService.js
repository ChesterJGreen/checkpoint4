import { ProxyState } from "../AppState.js";
import Clock from "../Models/Clock.js"



class ClocksService {

  checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
  }

}


export const clocksService = new ClocksService()