import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js"
import { sandBox } from "./AxiosService.js";

class ImagesService {

  async getNewImage() {
    const res = await sandBox.get('/images')
    console.log(res.data)
    ProxyState.image = new Image(res.data)
  }
}

export const imagesService = new ImagesService()