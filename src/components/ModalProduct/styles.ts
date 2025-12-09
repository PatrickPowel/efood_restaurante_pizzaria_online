import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ModalContent = styled.div`
  background: ${cores.corDePeleFundo};
  padding: 24px;
  width: 420px;
  border-radius: 8px;
  position: relative;
  color: #000;

  img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  background: ${cores.corSalmao};
  color: #fff;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`
