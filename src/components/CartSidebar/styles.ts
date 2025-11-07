import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 10;

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: ${cores.corSalmao};
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  z-index: 11;

  &.open {
    right: 0;
  }

  .topo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h3 {
      color: #fff;
      font-size: 22px;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
        color: #ffebc1;
      }
    }
  }
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF8F2;
  color: ${cores.corSalmao};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 10px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
    }

    span {
      font-size: 14px;
      margin-bottom: 4px;
    }

    button {
      background: transparent;
      border: 1px solid ${cores.corSalmao};
      color: ${cores.corSalmao};
      border-radius: 6px;
      padding: 4px 8px;
      cursor: pointer;

      &:hover {
        background: ${cores.corSalmao};
        color: #fff;
      }
    }
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 18px;
  margin-top: 12px;
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color: ${cores.corSalmao};
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f8dcdc;
  }
`


