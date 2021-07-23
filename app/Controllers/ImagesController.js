import { ProxyState } from "../AppState.js";
import { ImagesService } from "../Services/ImagesService.js";

function _draw() {
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
    ProxyState.on("values", _draw); //value does not work
    _draw()
  }


}