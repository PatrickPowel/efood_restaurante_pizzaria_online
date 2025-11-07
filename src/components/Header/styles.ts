import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: #ffebd9; /* Fundo claro igual ao Figma */
  padding: 16px 0;

  .content {
    width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const LinkItem = styled.li`
  margin-right: 16px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LinkCart = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`
