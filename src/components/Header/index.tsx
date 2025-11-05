import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import Logo from '../../assets/images/logo.png'
import Carrinho from '../../assets/images/carrinho.png'

const Header = () => {
  // Lê o número de produtos do carrinho via Redux
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  return (
    <HeaderBar>
      {/* Container interno centralizado */}
      <div className="content">
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
          </Links>
        </nav>

        <Link to="/">
          <img src={Logo} alt="logo efood" />
        </Link>

        {/* Contador dinâmico do carrinho */}
        <LinkCart as={Link} to="/cart">
          {cartCount} - Produto{cartCount !== 1 ? 's' : ''}
          <img src={Carrinho} alt="carrinho de compras" />
        </LinkCart>
      </div>
    </HeaderBar>
  )
}

export default Header
