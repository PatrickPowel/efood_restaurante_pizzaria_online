import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Food from '../../Models/Food'

import macarrao from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'
import suschi from '../../assets/images/suchi.png'

const promocoes: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    system: 'Saiba Mais!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: suschi,
    nota: 4.9,
    preco: 65
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.6,
    preco: 65
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.8,
    preco: 65
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'Cozinha italiana tradicional com massas artesanais e ingredientes selecionados. Qualidade e sabor garantidos.',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.9,
    preco: 65
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'Sabores autênticos da Itália entregues na sua casa com rapidez e carinho.',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.9,
    preco: 65
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'Massas, pizzas e risotos preparados com receitas tradicionais italianas.',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.9,
    preco: 65
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
