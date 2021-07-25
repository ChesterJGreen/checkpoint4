import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
  let template = ''
  let todos = ProxyState.todo

  document.getElementById('todo-list').innerHTML = todos.Template

}

export default class TodosController {
  constructor() {
    _draw()
    this.getTodoList()
  }



  async getTodoList() {
    try {
      await todosService.getTodoList()
    } catch (e) {
      console.error('could not get Todo List' + e)
    }
  }
  async addTask() {
    try {

      event.preventDefault()
      let form = event.target
      let rawTodo = {
        description: form.description.value,
        id: form.id.value,
        completed: form.completed.value,



      }
      await todosService.addTodo()
      form.reset()
    } catch (error) {
      console.error('could not post to server' + error)
    }
  }
}