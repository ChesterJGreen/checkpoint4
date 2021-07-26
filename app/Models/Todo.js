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

  get CheckedString() {
    if (this.completed) {
      return "checked"
    } else {
      return ""
    }
  }


  get Template() {
    return `
    <div class="col-8 offset-1" >
      <input class="form-check-input todos action" onclick="app.todosController.changeStatus('${this.id}')" type="checkbox" ${this.CheckedString}>
        <label class="form-check-label todos" for="todo-item">
          <span class="ml-1">${this.description}</span>
    </div>
    <div class="col-2 action btn" onclick="app.todosController.removeTodo('${this.id}')">X</div>
        
  `
  }
}
