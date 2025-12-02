import styled from 'styled-components'
import { cores } from '../../styles'

const Button = styled.button`
  background-color: #ffebb9;
  color: ${cores.corSalmao};
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`

export default Button
