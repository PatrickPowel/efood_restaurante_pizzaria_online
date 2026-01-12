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
    if (
      !cartao.numero ||
      !cartao.nome ||
      !cartao.vencimento ||
      !cartao.cvv
    ) {
      alert('Preencha todos os dados do cartão')
      return
    }

    const entrega = JSON.parse(
      String(sessionStorage.getItem('dadosEntrega'))
    )

    if (!entrega) {
      alert('Dados de entrega não encontrados')
      return
    }

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
        value={cartao.numero}
        onChange={atualizar}
      />
      <input
        name="nome"
        placeholder="Nome no cartão"
        value={cartao.nome}
        onChange={atualizar}
      />
      <input
        name="vencimento"
        placeholder="Vencimento"
        value={cartao.vencimento}
        onChange={atualizar}
      />
      <input
        name="cvv"
        placeholder="CVV"
        value={cartao.cvv}
        onChange={atualizar}
      />

      <button className="btn-card" onClick={finalizarPedido}>
        Finalizar Pedido
      </button>
    </div>
  )
}

export default Pagamento
