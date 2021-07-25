import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { todosService } from "../Services/TodosService.js";

function _draw() {
  const todo = ProxyState.todo
  let template = ''
  todo.forEach(p => template += `<li class="action" onclick="app.todosController.removeTodo('${p.description}')">${p.description}</li>`)
  if (!template) {
    template += `<p>Nothing To Do</p>`
    document.getElementById('todo-list').innerHTML = template
  }
}

export default class TodosController {
  constructor() {
    ProxyState.on('todo', _draw)

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