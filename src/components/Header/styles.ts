import styled from 'styled-components'
import Fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-color: #ffebc1;
  background-image: url(${Fundo});
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    max-width: 1024px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #e66767;
    font-weight: bold;
    font-size: 14px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    height: 40px;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 10px;
    }

    img {
      order: -1;
      height: 36px;
    }

    a {
      font-size: 13px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
`

export const LinkItem = styled.li``

export const LinkCart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e66767;
  font-weight: bold;

  img {
    width: 20px;
    height: 20px;
  }
`
