import { ProxyState } from "../AppState.js";
import { sandBox } from "./AxiosService.js";
import Quote from "../Models/Quote.js"


class QuotesService {

  async getNewQuote() {
    const res = await sandBox.get('/quotes')
    console.log(res.data)
    ProxyState.quote = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()