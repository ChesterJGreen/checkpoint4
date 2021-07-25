import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { sandBox } from "./AxiosService.js";

class TodosService {

  async getTodoList() {
    const res = await sandBox.get('/ChesterG/todos')
    console.log(res.data)
    ProxyState.todo = new Todo(res.data)
  }
}

export const todosService = new TodosService()