import styled from 'styled-components'

export const Imagem = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1024px;
    width: 100%;
    padding: 0 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: #e66767;
    font-size: 32px;
    font-weight: bold;
    margin-top: 16px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    height: 320px;

    p {
      font-size: 22px;
      padding: 0 10px;
    }
  }
`

export const ImagemEfood = styled.div`
  width: 130px;
  height: 57px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
