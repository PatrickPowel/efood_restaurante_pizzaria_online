import { Imagem, ImagemEfood } from './styles'

import bannerImg from '../../assets/images/VectorFundoCabecalho.png'
import bannerImgEfood from '../../assets/images/logo.png'

const BannerHome = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <ImagemEfood style={{ backgroundImage: `url(${bannerImgEfood})` }} />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </div>
  </Imagem>
)

export default BannerHome
