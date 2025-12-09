import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, clearCart } from '../../store/reducers/carts'
import { changeStep } from '../../store/reducers/ui'
import { Sidebar, Overlay, CartItem, Total, Button, Row } from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const CartSidebar = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const step = useSelector((state: RootState) => state.ui.sidebarStep)

  // Campos locais para registro do pedido
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

  // ID fake do pedido (só visual)
  const orderId = Math.floor(Math.random() * 90000) + 10000

  const total = cartItems
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2)
    .replace('.', ',')

  // Helpers de formatação
  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 5) return digits
    return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`
  }

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .trim()
  }

  const formatOnlyDigits = (value: string, max: number) => {
    return value.replace(/\D/g, '').slice(0, max)
  }

  // Atualizadores genéricos
  const updateDelivery = (field: keyof typeof deliveryData, value: string) => {
    setDeliveryData((prev) => ({ ...prev, [field]: value }))
  }

  const updatePayment = (field: keyof typeof paymentData, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  function goToDelivery() {
    dispatch(changeStep('delivery'))
  }

  function goToPayment() {
    dispatch(changeStep('payment'))
  }

  function goToConfirmation() {
    dispatch(changeStep('confirmation'))
    dispatch(clearCart())
  }

  return (
    <>
      <Overlay className={isOpen ? 'visible' : ''} onClick={onClose} />

      <Sidebar className={isOpen ? 'open' : ''}>
        {/* ETAPA 1 - CARRINHO */}
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

                <Button onClick={goToDelivery}>Continuar para entrega</Button>
              </>
            )}
          </>
        )}

        {/* ETAPA 2 - ENTREGA */}
        {step === 'delivery' && (
          <>
            <h3>Entrega</h3>

            <input
              placeholder="Quem irá receber"
              name="name"
              value={deliveryData.name}
              onChange={(e) => updateDelivery('name', e.target.value)}
            />

            <input
              placeholder="Endereço"
              name="address"
              value={deliveryData.address}
              onChange={(e) => updateDelivery('address', e.target.value)}
            />

            <input
              placeholder="Cidade"
              name="city"
              value={deliveryData.city}
              onChange={(e) => updateDelivery('city', e.target.value)}
            />

            <Row>
              <input
                placeholder="CEP"
                name="cep"
                maxLength={9}
                value={deliveryData.cep}
                onChange={(e) =>
                  updateDelivery('cep', formatCep(e.target.value))
                }
              />

              <input
                placeholder="Número"
                name="number"
                value={deliveryData.number}
                onChange={(e) => updateDelivery('number', e.target.value)}
              />
            </Row>

            <input
              placeholder="Complemento (opcional)"
              name="complement"
              value={deliveryData.complement}
              onChange={(e) => updateDelivery('complement', e.target.value)}
            />

            <Button onClick={goToPayment}>Continuar com o pagamento</Button>

            <Button onClick={() => dispatch(changeStep('cart'))}>
              Voltar para o carrinho
            </Button>
          </>
        )}

        {/* ETAPA 3 - PAGAMENTO */}
        {step === 'payment' && (
          <>
            <h3>Pagamento - Valor a pagar R$ {total}</h3>

            <input
              placeholder="Nome no cartão"
              name="cardName"
              value={paymentData.cardName}
              onChange={(e) => updatePayment('cardName', e.target.value)}
            />

            <input
              placeholder="Número do cartão"
              name="cardNumber"
              maxLength={19}
              value={paymentData.cardNumber}
              onChange={(e) =>
                updatePayment('cardNumber', formatCardNumber(e.target.value))
              }
            />

            <Row>
              <input
                placeholder="CVV"
                name="cvv"
                maxLength={3}
                value={paymentData.cvv}
                onChange={(e) =>
                  updatePayment('cvv', formatOnlyDigits(e.target.value, 3))
                }
              />

              <input
                placeholder="Mês de vencimento"
                name="month"
                maxLength={2}
                value={paymentData.month}
                onChange={(e) =>
                  updatePayment('month', formatOnlyDigits(e.target.value, 2))
                }
              />

              <input
                placeholder="Ano de vencimento"
                name="year"
                maxLength={2}
                value={paymentData.year}
                onChange={(e) =>
                  updatePayment('year', formatOnlyDigits(e.target.value, 2))
                }
              />
            </Row>

            <Button onClick={goToConfirmation}>Finalizar pagamento</Button>

            <Button onClick={() => dispatch(changeStep('delivery'))}>
              Voltar para edição de endereço
            </Button>
          </>
        )}

        {/* ETAPA 4 - CONFIRMAÇÃO */}
        {step === 'confirmation' && (
          <>
            <h3>Pedido realizado - #{orderId}</h3>

            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Lembre-se de higienizar as mãos após o recebimento do pedido,
              garantindo assim sua segurança e bem-estar durante a refeição.
            </p>

            <Button onClick={onClose}>Concluir</Button>
          </>
        )}
      </Sidebar>
    </>
  )
}

export default CartSidebar
