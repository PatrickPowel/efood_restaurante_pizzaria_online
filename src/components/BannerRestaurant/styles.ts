import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 32px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.24); /* overlay escuro */
  }

  .container {
    position: relative;
    z-index: 1;
    padding: 32px 64px;
  }
`

export const Type = styled.p`
  font-size: 18px;
  color: ${cores.corSalmao};
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 32px;
  color: ${cores.corSalmao};
  font-weight: bold;
`
