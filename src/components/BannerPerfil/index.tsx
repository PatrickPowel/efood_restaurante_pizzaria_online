import { Container } from './styles'

type Props = {
  title: string
  type: string
  image: string
}

const BannerPerfil = ({ title, type, image }: Props) => (
  <Container style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay">
      <div className="content">
        <p>{type}</p>
        <h2>{title}</h2>
      </div>
    </div>
  </Container>
)

export default BannerPerfil
