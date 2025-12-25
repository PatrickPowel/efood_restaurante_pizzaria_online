import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, clearCart } from '../../store/reducers/carts'
import { changeStep } from '../../store/reducers/ui'
import { Sidebar, Overlay, CartItem, Total, Button, Row } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const CartSidebar = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const step = useSelector((state: RootState) => state.ui.sidebarStep)

  const [deliveryData, setDeliveryData] = useState({
    name: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    month: '',
    year: ''
  })

  const orderId = Math.floor(Math.random() * 90000) + 10000

  const total = cartItems
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2)
    .replace('.', ',')

  /* ==========================
     HELPERS
  ========================== */

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 5) return digits
    return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`
  }

  const formatCardNumber = (value: string) =>
    value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim()

  const onlyDigits = (value: string, max: number) =>
    value.replace(/\D/g, '').slice(0, max)

  const updateDelivery = (field: string, value: string) =>
    setDeliveryData((prev) => ({ ...prev, [field]: value }))

  const updatePayment = (field: string, value: string) =>
    setPaymentData((prev) => ({ ...prev, [field]: value }))

  /* ==========================
     VALIDAÇÕES (OBRIGATÓRIO EBAC)
  ========================== */

  const isDeliveryValid = () => {
    const { name, address, city, cep, number } = deliveryData
    return (
      name.trim() &&
      address.trim() &&
      city.trim() &&
      cep.trim() &&
      number.trim()
    )
  }

  const isPaymentValid = () => {
    const { cardName, cardNumber, cvv, month, year } = paymentData
    return (
      cardName.trim() &&
      cardNumber.replace(/\s/g, '').length === 16 &&
      cvv.length === 3 &&
      month.length === 2 &&
      year.length === 2
    )
  }

  /* ==========================
     API CHECKOUT (OBRIGATÓRIO EBAC)
  ========================== */

  async function submitOrder() {
    if (!isPaymentValid()) return

    const body = {
      products: cartItems.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: deliveryData.name,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.cep,
          number: deliveryData.number,
          complement: deliveryData.complement
        }
      },
      payment: {
        card: {
          name: paymentData.cardName,
          number: paymentData.cardNumber.replace(/\s/g, ''),
          code: paymentData.cvv,
          expires: {
            month: paymentData.month,
            year: paymentData.year
          }
        }
      }
    }

    await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    dispatch(clearCart())
    dispatch(changeStep('confirmation'))
  }

  return (
    <>
      <Overlay className={isOpen ? 'visible' : ''} onClick={onClose} />

      <Sidebar className={isOpen ? 'open' : ''}>
        {/* CARRINHO */}
        {step === 'cart' && (
          <>
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
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        aria-label="Remover item"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </CartItem>
                ))}

                <Total>
                  <span>Total:</span>
                  <strong>R$ {total}</strong>
                </Total>

                <Button onClick={() => dispatch(changeStep('delivery'))}>
                  Continuar para entrega
                </Button>
              </>
            )}
          </>
        )}

        {/* ENTREGA */}
        {step === 'delivery' && (
          <>
            <h3>Entrega</h3>

            <input
              placeholder="Quem irá receber"
              value={deliveryData.name}
              onChange={(e) => updateDelivery('name', e.target.value)}
            />

            <input
              placeholder="Endereço"
              value={deliveryData.address}
              onChange={(e) => updateDelivery('address', e.target.value)}
            />

            <input
              placeholder="Cidade"
              value={deliveryData.city}
              onChange={(e) => updateDelivery('city', e.target.value)}
            />

            <Row>
              <input
                placeholder="CEP"
                maxLength={9}
                value={deliveryData.cep}
                onChange={(e) =>
                  updateDelivery('cep', formatCep(e.target.value))
                }
              />

              <input
                placeholder="Número"
                value={deliveryData.number}
                onChange={(e) => updateDelivery('number', e.target.value)}
              />
            </Row>

            <input
              placeholder="Complemento (opcional)"
              value={deliveryData.complement}
              onChange={(e) => updateDelivery('complement', e.target.value)}
            />

            <Button disabled={!isDeliveryValid()} onClick={() => dispatch(changeStep('payment'))}>
              Continuar com o pagamento
            </Button>

            <Button onClick={() => dispatch(changeStep('cart'))}>
              Voltar para o carrinho
            </Button>
          </>
        )}

        {/* PAGAMENTO */}
        {step === 'payment' && (
          <>
            <h3>Pagamento - Valor a pagar R$ {total}</h3>

            <input
              placeholder="Nome no cartão"
              value={paymentData.cardName}
              onChange={(e) => updatePayment('cardName', e.target.value)}
            />

            <input
              placeholder="Número do cartão"
              maxLength={19}
              value={paymentData.cardNumber}
              onChange={(e) =>
                updatePayment('cardNumber', formatCardNumber(e.target.value))
              }
            />

            <Row>
              <input
                placeholder="CVV"
                maxLength={3}
                value={paymentData.cvv}
                onChange={(e) =>
                  updatePayment('cvv', onlyDigits(e.target.value, 3))
                }
              />

              <input
                placeholder="Mês"
                maxLength={2}
                value={paymentData.month}
                onChange={(e) =>
                  updatePayment('month', onlyDigits(e.target.value, 2))
                }
              />

              <input
                placeholder="Ano"
                maxLength={2}
                value={paymentData.year}
                onChange={(e) =>
                  updatePayment('year', onlyDigits(e.target.value, 2))
                }
              />
            </Row>

            <Button disabled={!isPaymentValid()} onClick={submitOrder}>
              Finalizar pagamento
            </Button>

            <Button onClick={() => dispatch(changeStep('delivery'))}>
              Voltar para edição de endereço
            </Button>
          </>
        )}

        {/* CONFIRMAÇÃO */}
        {step === 'confirmation' && (
          <>
            <h3>Pedido realizado - #{orderId}</h3>
            <p>
              Seu pedido já está em preparação e será entregue em breve.
            </p>
            <Button onClick={onClose}>Concluir</Button>
          </>
        )}
      </Sidebar>
    </>
  )
}

export default CartSidebar
