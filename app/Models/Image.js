export default class Image {
  constructor({ id, imgUrl, author, largeImgUrl }) {
    this.id = id
    this.imgUrl = imgUrl
    this.author = author
    this.largeImgUrl = largeImgUrl
  }

  get Template() {
    return `url('${this.largeImgUrl}')`
  }
  get AuthorTemplate() {
    return `${this.author}`
  }
}

