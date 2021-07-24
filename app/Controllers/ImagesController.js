import { ProxyState } from "../AppState.js";
import { sandBox } from "../Services/AxiosService.js";
import { imagesService } from "../Services/ImagesService.js";

function _draw() {
  document.getElementById('full-body').style.backgroundImage = ProxyState.image.Template
  document.getElementById('author').innerText = ProxyState.image.AuthorTemplate
}

//Private
// function _draw() {
//   let values = ProxyState.values;
//   let template = ''
//   values.forEach(v => template += v.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
//   <div className="card-columns values">
//       ${template}
//   </div>
//   `
// }


export default class ImagesController {
  constructor() {
    ProxyState.on("image", _draw); //value does not work
    _draw()

    this.getNewImage()
  }


  async getNewImage() {
    try {
      await imagesService.getNewImage()
    } catch (error) {
      console.error('could not get image' + error)
    }



  }
}