import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${cores.branca};

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 120px;
  }

  .content {
    text-align: left;

    p {
      font-size: 16px;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 32px;
      font-weight: bold;
    }
  }
`
