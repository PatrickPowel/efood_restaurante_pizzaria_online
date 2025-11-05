import styled from 'styled-components'

export const Container = styled.div<{ background: string }>`
  background-color: ${(props) =>
    props.background === 'black' ? '#000' : '#fff8f2'};
  padding: 32px 0;
  margin-top: 32px;

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }

  h2 {
    color: #e66767;
    font-size: 24px;
    margin-bottom: 24px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
