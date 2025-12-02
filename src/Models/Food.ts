class Food {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  system: string
  nota: number
  preco: number // ✅ NOVO CAMPO

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    nota: number,
    preco: number // ✅ NOVO PARÂMETRO
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.nota = nota
    this.preco = preco // ✅ INICIALIZAÇÃO
  }
}

export default Food
