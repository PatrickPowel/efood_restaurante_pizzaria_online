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
<<<<<<< HEAD
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
=======
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis,  tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
>>>>>>> cd0fc97 (Atualizando validações de campo e chamada de POST em API)
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
<<<<<<< HEAD
    title: 'La Dolce Vita Trattoria',
=======
>>>>>>> cd0fc97 (Atualizando validações de campo e chamada de POST em API)
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.6,
    preco: 65.0 // <-- adicione isso em todos
  },

  {
<<<<<<< HEAD
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
=======
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
>>>>>>> cd0fc97 (Atualizando validações de campo e chamada de POST em API)
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.6,
<<<<<<< HEAD
    preco: 65.0 
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
    preco: 65.0 
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
    preco: 65.0 
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
    preco: 65.0 
  },
=======
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
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    system: 'Saiba Mais!',
    infos: ['Italiana'],
    image: macarrao,
    nota: 4.6,
    preco: 65
  },
  
>>>>>>> cd0fc97 (Atualizando validações de campo e chamada de POST em API)
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
