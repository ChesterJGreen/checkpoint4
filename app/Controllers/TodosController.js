import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
  // let template = ''
  // let todos = ProxyState.todos

  // document.getElementById('todo-list').innerHTML = ProxyState.todo.Template

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
}