import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas /> {/* As rotas controlam o conteúdo exibido */}
      <Footer /> {/* O footer aparece em todas as páginas */}
    </BrowserRouter>
  )
}

export default App
