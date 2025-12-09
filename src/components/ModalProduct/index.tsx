import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/carts'
import { ModalOverlay, ModalContent, Button } from './styles'

type Props = {
  title: string
  image: string
  description: string
  porcao: string
  preco: number
  closeModal: () => void
}

const Modal = ({
  title,
  image,
  description,
  porcao,
  preco,
  closeModal
}: Props) => {
  const dispatch = useDispatch()

  const adicionarAoCarrinho = () => {
    dispatch(
      addToCart({
        id: new Date().getTime(),
        title,
        image,
        description,
        infos: [porcao],
        nota: 0,
        preco,
        system: ''
      })
    )
    closeModal()
  }

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          X
        </button>

        <img src={image} alt={title} />

        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong>Serve:</strong> {porcao}
        </p>

        <Button onClick={adicionarAoCarrinho}>
          Adicionar ao carrinho — R$ {preco.toFixed(2).replace('.', ',')}
        </Button>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
