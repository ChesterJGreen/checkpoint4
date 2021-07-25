export default class Todo {
  constructor({ id, completed, user, description }) {
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
    <span>${this.description}</span>
  
  `
  }
}