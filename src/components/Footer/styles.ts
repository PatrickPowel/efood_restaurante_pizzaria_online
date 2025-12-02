import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: #ffe8d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 0;
  font-family: 'Poppins', sans-serif;
`

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    color: #e66767;
    font-size: 20px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const FooterText = styled.p`
  font-size: 12px;
  color: #e66767;
  max-width: 600px;
  line-height: 1.4;
`
