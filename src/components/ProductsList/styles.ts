import styled from 'styled-components'

export const Container = styled.div<{ background: string }>`
  background-color: #fff8f2;
  padding: 24px 0;
  margin-top: 16px;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px; /* melhora alinhamento no mobile */
  }

  @media (max-width: 768px) {
    padding: 8px 0;

    .container {
      padding: 0 8px; /* borda mínima lateral igual restaurante */
      max-width: 100%; /* ocupa toda tela */
    }
  }
`

export const List = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
