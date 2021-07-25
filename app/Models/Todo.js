import { ProxyState } from "../AppState.js";
export default class Todo {
  constructor({ id, completed = false, user, description }) {
    this.id = id
    //string, required:true, unique: true
    this.completed = completed
    //boolean, required: true, default: false
    this.user = user
    //string required:true
    this.description = description
    //string required: true
  }



  get Template() {
    return `
    <div class="form-check">
  <input class="form-check-input todos" type="checkbox" value="${this.completed}">
  <label class="form-check-label todos" for="todo-item">
  <span>${this.description}</span><i class="fa fa-trash" aria-hidden="true"></i>
  </label>
</div>
  
  `
  }
}