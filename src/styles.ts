import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  corSalmao: '#E66767',
  corDePeleFundo: '#FFEBD9',
  corDePeleFundoEscuro: '#ffebc1',
  corDeFundoHome: '#FFF8F2',
  branco: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.corDeFundoHome};
    color: ${cores.branca};
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 8px;
  }
}
`
