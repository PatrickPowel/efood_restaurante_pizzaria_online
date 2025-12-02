import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import BannerRestaurant from '../../components/BannerRestaurant'
import ProductsListRestaurant from '../../components/ProductsListRestaurant'
import ModalProduct from '../../components/ModalProduct'
import Food from '../../Models/Food'

type RestaurantData = {
  id: number
  titulo: string
  capa: string
  cardapio: Food[]
}

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantData | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Food | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-ebac.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await response.json()

        const foods: Food[] = data.cardapio.map((item: any) => ({
          id: item.id,
          title: item.nome,
          description: item.descricao,
          image: item.foto,
          infos: [data.tipo, item.porcao],
          system: 'Tradicional',
          nota: data.avaliacao,
          preco: item.preco ?? 0
        }))

        setRestaurant({
          id: data.id,
          titulo: data.titulo,
          capa: data.capa,
          cardapio: foods
        })
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar restaurante:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const openModal = (product: Food) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  if (loading) return <p>Carregando...</p>
  if (!restaurant) return <p>Restaurante não encontrado.</p>

  return (
    <>
      <Header />
      <BannerRestaurant image={restaurant.capa} />

      <div className="container">
        <ProductsListRestaurant
          title=""
          background="salmon"
          food={restaurant.cardapio.slice(0, 6)}
          onSelectProduct={openModal}
        />
      </div>

      <ModalProduct
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={closeModal}
      />
    </>
  )
}

export default Restaurant
