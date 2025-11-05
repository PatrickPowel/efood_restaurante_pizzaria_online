import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corDePeleFundo};
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: center;

  /* Conteúdo centralizado dentro do fundo que preenche toda a largura */
  .content {
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  a {
    color: ${cores.corSalmao};
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      color: #cf5c5c;
    }
  }

  img {
    max-width: 80px;
  }

  @media (max-width: 1024px) {
    .content {
      padding: 0 16px;
    }

    img {
      max-width: 70px;
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 8px;
      justify-content: center;
    }

    img {
      max-width: 60px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;

  img {
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
`
