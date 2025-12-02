import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/carts'
import Food from '../../Models/Food'
import estrela from '../../assets/images/estrela.png'
import { Card, Titulo, Descricao, Infos, Nota, ButtonContainer } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  system: string
  nota: number
  preco: number
  onSelect: (product: Food) => void // função que abre o modal
}

const ProductRestaurant = ({
  id,
  title,
  description,
  image,
  infos,
  system,
  nota,
  preco,
  onSelect
}: Props) => {
  const product: Food = {
    id,
    title,
    description,
    image,
    infos,
    system,
    nota,
    preco
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Infos>
        {infos.map((info, index) => (
          <span key={index}>{info}</span>
        ))}
      </Infos>
      <Nota>
        {nota.toFixed(1)} <span>⭐</span>
      </Nota>

      {/* ✅ Ao clicar, apenas abre o modal */}
      <ButtonContainer onClick={() => onSelect(product)}>
        Adicionar — R$ {preco.toFixed(2).replace('.', ',')}
      </ButtonContainer>
    </Card>
  )
}

export default ProductRestaurant
