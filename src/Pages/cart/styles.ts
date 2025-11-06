import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  padding: 20px;

  h1,
  h2 {
    color: #e66767 !important;
    margin-bottom: 32px;
    text-align: center;
    font-weight: bold;
  }

  p {
    color: #e66767; /* agora o texto do carrinho vazio fica visível */
    text-align: center;
    font-weight: 500;
    margin-top: 16px;
  }
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #e66767;
  border-radius: 12px;
  padding: 20px;
  justify-content: space-between;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }

  div {
    flex: 1;
    margin-left: 16px;

    h3 {
      color: #fff; /* ajustado para melhor contraste dentro do fundo salmão */
      margin-bottom: 8px;
    }

    p {
      color: #fff;
      font-size: 14px;
    }

    strong {
      display: block;
      margin-top: 4px;
      color: #fff;
    }
  }

  button {
    border: 2px solid #fff;
    background-color: transparent;
    padding: 8px 16px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #fff;
      color: #e66767;
    }
  }
`

export const Total = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;

  span {
    color: #e66767;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 24px;
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c95a5a;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 0;

  h2 {
    color: #e66767;
    margin-bottom: 12px;
  }
`
