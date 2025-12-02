import Food from '../../Models/Food'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'salmon' | 'black'
  food: Food[]
}

const ProductsList = ({ background, title, food }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {food.map((item) => (
          <Product
            key={item.id}
            id={item.id} // ✅ Adicionado
            description={item.description}
            image={item.image}
            infos={item.infos}
            system={item.system}
            title={item.title}
            nota={item.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
