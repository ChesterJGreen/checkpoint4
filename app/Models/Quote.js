export default class Quote {
  constructor({ tags, content, author }) {
    this.tags = tags
    this.content = content,
      this.author = author
  }


  get Template() {
    return `
    <div class="authorH">
      <h4>"${this.content}"</h4>
      <div class="authorV">
  <h6 class="hover">- ${this.author}</h6>
  </div>
  </div>
  `
  }
}