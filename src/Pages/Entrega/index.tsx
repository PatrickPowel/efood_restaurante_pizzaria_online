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
    if (!dados.nome || !dados.endereco || !dados.cidade || !dados.cep) {
      alert('Preencha todos os campos de entrega')
      return
    }

    sessionStorage.setItem('dadosEntrega', JSON.stringify(dados))
    navigate('/pagamento')
  }

  return (
    <div className="container">
      <h1>Entrega</h1>

      <input
        name="nome"
        placeholder="Nome"
        value={dados.nome}
        onChange={atualizar}
      />
      <input
        name="endereco"
        placeholder="Endereço"
        value={dados.endereco}
        onChange={atualizar}
      />
      <input
        name="cidade"
        placeholder="Cidade"
        value={dados.cidade}
        onChange={atualizar}
      />
      <input
        name="cep"
        placeholder="CEP"
        value={dados.cep}
        onChange={atualizar}
      />

      <button className="btn-card" onClick={continuar}>
        Concluir
      </button>
    </div>
  )
}

export default Entrega
