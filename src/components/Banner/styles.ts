import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0; /* remove espaço extra */

  p {
    color: ${cores.corSalmao};
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    margin-top: 16px;
    max-width: 600px;
  }

  .container {
    margin-top: 0; /* elimina espaçamento errado */
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 300px;
    p {
      font-size: 20px;
      max-width: 90%;
    }
  }
`

export const ImagemEfood = styled.div`
  width: 180px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`
