import { Link } from 'react-router-dom'

const Confirmacao = () => {
  const pedido = JSON.parse(String(sessionStorage.getItem('pedidoConfirmado')))

  return (
    <div className="container">
      <h1>Pedido Confirmado!</h1>

      <p>Número do pedido: {pedido.orderId}</p>
      <p>Tempo estimado de entrega: {pedido.delivery?.time}</p>
      <p>Endereço: {pedido.delivery?.address}</p>

      <Link to="/" className="btn-card" style={{ marginTop: 16 }}>
        Voltar para Home
      </Link>
    </div>
  )
}

export default Confirmacao
