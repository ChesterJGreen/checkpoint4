export default class Image {
  constructor({ id, imgUrl, author, }) {
    this.id = id
    this.imgUrl = imgUrl
    this.author = author
  }

  get Template() {
    return `url('${this.imgUrl}')`
  }
  get AuthorTemplate() {
    return `${this.author}`
  }
}

