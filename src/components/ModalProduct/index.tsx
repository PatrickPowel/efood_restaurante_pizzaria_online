import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/carts'
import { Button, ModalContent, ModalOverlay } from './styles'
import Food from '../../Models/Food'

type Props = {
  isOpen: boolean
  product: Food | null
  onClose: () => void
}

const ModalProduct = ({ isOpen, product, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!isOpen || !product) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="serving">Serve: {product.infos.join(', ')}</p>

          <Button
            onClick={() => {
              dispatch(addToCart(product))
              onClose()
            }}
          >
            Adicionar ao carrinho — R${' '}
            {product.preco.toFixed(2).replace('.', ',')}
          </Button>
        </div>
        <button onClick={onClose} className="close">
          X
        </button>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalProduct
