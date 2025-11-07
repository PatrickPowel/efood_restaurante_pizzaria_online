import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart } from '../../store/reducers/carts'
import { Sidebar, Overlay, CartItem, Total, Button } from './styles'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const total = cartItems
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2)
    .replace('.', ',')

  return (
    <>
      <Overlay className={isOpen ? 'visible' : ''} onClick={onClose} />
      <Sidebar className={isOpen ? 'open' : ''}>
        <h3>Seu Pedido</h3>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                  <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remover
                  </button>
                </div>
              </CartItem>
            ))}
            <Total>
              <span>Total:</span>
              <strong>R$ {total}</strong>
            </Total>
            <Button>Continuar para entrega</Button>
          </>
        )}
      </Sidebar>
    </>
  )
}

export default CartSidebar
