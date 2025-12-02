import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  background-color: #ff f;
  border: 1px solid #e66767;
  border-radius: 8px;
  padding: 8px;
  width: 472px;
  max-width: 100%;
  height: 410px;
  box-sizing: border-box;
  overflow: hidden;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    border-radius: 8px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const Nota = styled.div`
  position: absolute;
  top: 240px;
  right: 16px;
  color: #e66767;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;

  img {
    width: 14px;
    height: 14px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #e66767;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
`
