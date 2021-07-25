import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
  let template = ''
  let todos = ProxyState.todo
  todos.forEach(t => template += todos.Template)
  if (!template) {
    template += `<p>Nothing To Do</p>`
    document.getElementById('todo-list').innerHTML = template
  }
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
  async addTodo() {
    try {

      event.preventDefault()
      let form = event.target
      let rawTodo = {
        description: form.description.value,
      }
      todosService.addTodo(rawTodo)
      await todosService.addTodo()
      form.reset()
    } catch (error) {
      console.error('could not post to server' + error)
    }
  }
}