import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { clearCart } from '../../store/reducers/carts'

const Pagamento = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const [cartao, setCartao] = useState({
    numero: '',
    nome: '',
    vencimento: '',
    cvv: ''
  })

  function atualizar(e: React.ChangeEvent<HTMLInputElement>) {
    setCartao({ ...cartao, [e.target.name]: e.target.value })
  }

  async function finalizarPedido() {
    const entrega = JSON.parse(String(sessionStorage.getItem('dadosEntrega')))

    const body = {
      delivery: entrega,
      products: cartItems
    }

    const resposta = await fetch(
      'https://api-ebac.vercel.app/api/efood/checkout',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
    )

    const dados = await resposta.json()

    sessionStorage.setItem('pedidoConfirmado', JSON.stringify(dados))

    dispatch(clearCart())

    navigate('/confirmacao')
  }

  return (
    <div className="container">
      <h1>Pagamento</h1>

      <input
        name="numero"
        placeholder="Número do cartão"
        onChange={atualizar}
      />
      <input name="nome" placeholder="Nome no cartão" onChange={atualizar} />
      <input name="vencimento" placeholder="Vencimento" onChange={atualizar} />
      <input name="cvv" placeholder="CVV" onChange={atualizar} />

      <button className="btn-card" onClick={finalizarPedido}>
        Finalizar Pedido
      </button>
    </div>
  )
}

export default Pagamento
