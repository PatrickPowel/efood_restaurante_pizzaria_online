import { BannerContainer, Title, Type } from './styles'

type Props = {
  title?: string
  type?: string
  image: string
}

const BannerRestaurant = ({ type, image }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <Type>{type}</Type>
    </div>
  </BannerContainer>
)

export default BannerRestaurant
