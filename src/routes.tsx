import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Restaurant from './Pages/Restaurant'
import Cart from './Pages/cart'
import Entrega from './Pages/Entrega'
import Pagamento from './Pages/Pagamento'
import Confirmacao from './Pages/Confirmacao'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/entrega" element={<Entrega />} />
    <Route path="/pagamento" element={<Pagamento />} />
    <Route path="/confirmacao" element={<Confirmacao />} />
  </Routes>
)

export default Rotas
