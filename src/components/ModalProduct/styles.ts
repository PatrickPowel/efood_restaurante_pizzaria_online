import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: #ffeadd;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  color: #e66767;
  position: relative;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 12px;
    background: none;
    border: none;
    font-size: 20px;
    color: #e66767;
    cursor: pointer;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
  }

  .serving {
    margin-top: 8px;
    font-style: italic;
  }
`

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d15858;
  }
`
