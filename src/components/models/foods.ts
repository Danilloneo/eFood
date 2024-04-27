class Food {
  id: number
  title: string
  category: string
  infosFood: string[]
  description: string
  imageProduto: string
  imageNota: string
  punctuation: string

  constructor(
    id: number,
    title: string,
    category: string,
    infosFood: string[],
    description: string,
    imageProduto: string,
    imageNota: string,
    punctuation: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.infosFood = infosFood
    this.description = description
    this.imageProduto = imageProduto
    this.imageNota = imageNota
    this.punctuation = punctuation
  }
}

export default Food
