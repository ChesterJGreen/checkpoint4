import { ProxyState } from "../AppState.js";
import { sandBox } from "./AxiosService.js";
import Temp from "../Models/Temp.js"

class TempsService {
  async changeTemp() {
    ProxyState.temp.changeTemp();
  }
  async getNewTemp() {
    const res = await sandBox.get('/weather')
    console.log(res.data)
    ProxyState.temp = new Temp(res.data)
  }
}

export const tempsService = new TempsService()