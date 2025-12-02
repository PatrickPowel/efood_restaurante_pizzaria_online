import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Food from '../../Models/Food'

import macarrao from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'
import suschi from '../../assets/images/suchi.png'

const promocoes: Food[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    system: 'Saiba Mais!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: suschi,
    nota: 4.9,
    preco: 65.0
  },
  {
    id: 2,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: macarrao,
    nota: 4.0,
    preco: 80.0
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: suschi,
    nota: 4.9,
    preco: 55.0
  },
  {
    id: 4,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Pizza Marguerita',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: pizza,
    nota: 4.3,
    preco: 45.0
  }
]

const emBreve: Food[] = [
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Macarrão La Dolce',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: macarrao,
    nota: 4.8,
    preco: 65.0
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Pizza',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: pizza,
    nota: 4.7,
    preco: 50.0
  },
  {
    id: 7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Macarrão La Dolce',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: macarrao,
    nota: 4.8,
    preco: 65.0
  },
  {
    id: 8,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Pizza',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: pizza,
    nota: 4.9,
    preco: 50.0
  }
]

const Categories = () => (
  <>
    <Header />

    <div className="container">
      <ProductsList
        food={promocoes}
        title="Pratos Especiais"
        background="salmon"
      />
      <ProductsList food={emBreve} title="Especial do dia" background="black" />
      <ProductsList
        food={promocoes}
        title="Promoções especiais"
        background="salmon"
      />
      <ProductsList
        food={emBreve}
        title="Prato Recomendado"
        background="black"
      />
    </div>
  </>
)

export default Categories
