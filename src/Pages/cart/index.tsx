import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, clearCart } from '../../store/reducers/carts'
import Header from '../../components/Header'
import { Container, ProductList, ProductItem, Total, Button } from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  // Soma dos preços
  const total = cartItems
    .reduce((acc: number, item: any) => acc + (item.preco || 0), 0)
    .toFixed(2)
    .replace('.', ',')

  return (
    <>
      <Header />
      <Container>
        <h2>Carrinho de Compras</h2>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ProductList>
              {cartItems.map((item: any) => (
                <ProductItem key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <strong>
                      <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                    </strong>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      Remover
                    </button>
                  </div>
                </ProductItem>
              ))}
            </ProductList>

            <Total>
              <span>Total:</span>
              <strong>R$ {total}</strong>
            </Total>

            <Button onClick={() => dispatch(clearCart())}>
              Finalizar Pedido
            </Button>
          </>
        )}
      </Container>
    </>
  )
}

export default Cart
