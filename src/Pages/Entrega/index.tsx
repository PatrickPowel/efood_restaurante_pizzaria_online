import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Entrega = () => {
  const navigate = useNavigate()

  const [dados, setDados] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: ''
  })

  function atualizar(e: React.ChangeEvent<HTMLInputElement>) {
    setDados({ ...dados, [e.target.name]: e.target.value })
  }

  function continuar() {
    // Salva dados no sessionStorage para a próxima tela
    sessionStorage.setItem('dadosEntrega', JSON.stringify(dados))
    navigate('/pagamento')
  }

  return (
    <div className="container">
      <h1>Entrega</h1>

      <input name="nome" placeholder="Nome" onChange={atualizar} />
      <input name="endereco" placeholder="Endereço" onChange={atualizar} />
      <input name="cidade" placeholder="Cidade" onChange={atualizar} />
      <input name="cep" placeholder="CEP" onChange={atualizar} />

      <button className="btn-card" onClick={continuar}>
        Concluir
      </button>
    </div>
  )
}

export default Entrega
