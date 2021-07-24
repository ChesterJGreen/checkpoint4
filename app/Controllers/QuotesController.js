import { ProxyState } from "../AppState.js";
import { sandBox } from "../Services/AxiosService.js";
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
  document.getElementById('quote-area').innerHTML = ProxyState.quote.Template
}

export default class QuotesController {
  constructor() {
    ProxyState.on("quote", _draw);
    _draw()

    this.getNewQuote()
  }
  async getNewQuote() {
    try {
      await quotesService.getNewQuote()
    } catch (error) {
      console.error('could not get a new quote' + error)
    }
  }
}