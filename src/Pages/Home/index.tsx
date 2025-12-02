import Banner from '../../components/Banner'
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
    preco: 65.0 // <-- adicione isso em todos
  },

  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.6,
    preco: 65.0 // <-- adicione isso em todos
  },

  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.6,
    preco: 65.0 // <-- adicione isso em todos
  },

  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.9,
    preco: 65.0 // <-- adicione isso em todos
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.9,
    preco: 65.0 // <-- adicione isso em todos
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.9,
    preco: 65.0 // <-- adicione isso em todos
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList
      food={promocoes}
      title="Promoções do dia"
      background="salmon"
    />
  </>
)

export default Home
