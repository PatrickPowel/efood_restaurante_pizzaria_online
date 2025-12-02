import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Restaurant from './Pages/Restaurant'
import Cart from './Pages/cart' // ✅ Import novo
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
    <Route path="/cart" element={<Cart />} /> {/* ✅ Nova rota */}
  </Routes>
)

export default Rotas
