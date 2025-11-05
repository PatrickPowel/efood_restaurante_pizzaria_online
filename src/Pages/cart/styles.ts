import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  padding: 20px;

  h1 {
    color: #e66767;
    margin-bottom: 32px;
    text-align: center;
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
  background-color: #fff0f0;
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
      color: #e66767;
      margin-bottom: 8px;
    }
  }

  button {
    border: 2px solid #e66767;
    background-color: transparent;
    padding: 8px 16px;
    border-radius: 6px;
    color: #e66767;
    cursor: pointer;

    &:hover {
      background-color: #e66767;
      color: #fff;
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
