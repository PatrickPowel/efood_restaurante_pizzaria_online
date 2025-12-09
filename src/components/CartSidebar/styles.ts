import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 9998;  /* Mantém abaixo do sidebar */

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 380px;
  background: #e66767;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  transform: translateX(100%);
  transition: 0.35s ease;

  /* 🔥 SEMPRE POR CIMA */
  z-index: 9999;

  /* Premium shadow */
  box-shadow: -6px 0 18px rgba(0, 0, 0, 0.25);

  /* Scroll suave dentro do painel */
  overflow-y: auto;

  /* Barra de scroll minimal */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.4);
    border-radius: 4px;
  }

  &.open {
    transform: translateX(0);
  }

  h3 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #fff;
    line-height: 18px;
  }

  input {
    background: #ffecd5;
    border: none;
    padding: 10px 12px;
    font-size: 13px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    margin-bottom: 10px;

    /* Placeholder melhorado */
    &::placeholder {
      color: #9d6b6b;
      opacity: 0.8;
      font-size: 12px;
    }

    /* Efeito de foco premium */
    &:focus {
      border: 2px solid rgba(255, 255, 255, 0.7);
      background: #ffe6c9;
    }
  }
`

export const CartItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background: #ffecd5;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;

  img {
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 14px;
    margin-bottom: 2px;
  }

  span {
    font-size: 13px;
    color: #333;
  }

  button {
    background: transparent;
    border: none;
    color: #e66767;
    font-size: 12px;
    cursor: pointer;
    margin-top: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-weight: 700;
  color: #fff;
  border-top: 2px solid rgba(255,255,255,0.25);
  border-bottom: 2px solid rgba(255,255,255,0.25);
`

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #ffecd5;
  color: #e66767;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    background: #ffe1c4;
  }

  &:active {
    background: #f9d7b7;
    transform: scale(0.98);
  }
`

/* CEP + Número lado a lado */
export const Row = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
  }
`
