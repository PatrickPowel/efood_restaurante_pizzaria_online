import { Link } from 'react-router-dom'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'
import { Card, Descricao, Titulo, Infos, Nota } from './styles'

type Props = {
  id: number
  title: string
  system: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const Product = ({
  id,
  title,
  system,
  description,
  infos,
  image,
  nota
}: Props) => (
  <Card>
    <img src={image.startsWith('http') ? image : image} alt={title} />

    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>

    <Nota>
      <span>{nota}</span>
      <img src={estrela} alt="estrela" />
    </Nota>

    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>

    {/* ✅ Botão atualizado para abrir o restaurante correto */}
    <Link to={`/restaurante/${id}`} style={{ textDecoration: 'none' }}>
      <button
        style={{
          backgroundColor: '#e66767',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '100%',
          marginTop: '8px'
        }}
      >
        Saiba Mais!
      </button>
    </Link>
  </Card>
)

export default Product
