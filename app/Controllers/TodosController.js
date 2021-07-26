import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { todosService } from "../Services/TodosService.js";

function _draw() {
  const todo = ProxyState.todo
  let template = ''
  todo.forEach(p => template += p.Template)
  // <div class="col-2"><i class="fa fa-trash action btn" onclick="app.todosController.removeTodo('${p.id}')" aria-hidden="true"></i></div>

  if (!template) {
    template += `<div class="col-6">Nothing To Do</div>`
  }
  document.getElementById('todo-list').innerHTML = template

  let tasksPending = todo.filter(t => !t.completed).length
  let tasksTotal = todo.length
  let remainingText = `Remaining ${tasksPending} of ${tasksTotal}`
  document.getElementById('tasks-status').innerHTML = remainingText

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
        // @ts-ignore
        description: form.description.value,
      }
      await todosService.addTodo(rawTodo)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('could not post to server' + error)
    }
  }
  removeTodo(todoId) {
    console.log('you are trying to delete a job by the id of', todoId)
    todosService.removeTodo(todoId)
  }

  changeStatus(todoId) {
    // event.preventDefault()
    let checked = event.target.checked
    console.log('you are trying to modify this todo ' + todoId)
    todosService.changeStatus(todoId, checked)

  }
}