import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent; //é para deixar o botão transparente
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`

export const ButtonContainer = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #d15555;
  }
`
