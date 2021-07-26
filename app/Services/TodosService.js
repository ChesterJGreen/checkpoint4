import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { sandBox } from "./AxiosService.js";

class TodosService {


  async getTodoList() {
    const res = await sandBox.get('ChesterG/todos')
    console.log(res.data)
    ProxyState.todo = res.data.map(t => new Todo(t))
  }

  async addTodo(rawTodo) {
    const res = await sandBox.post('ChesterG/todos', rawTodo)
    ProxyState.todo = [...ProxyState.todo, new Todo(rawTodo)]

  }

  async removeTodo(todoId) {
    try {
      const res = await sandBox.delete('ChesterG/todos/' + todoId)
      console.log(res.data)
      ProxyState.todo = ProxyState.todo.filter(t => t.id != todoId)
    } catch (error) {
      console.error(error)
    }

  }
}

export const todosService = new TodosService()