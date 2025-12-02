import styled from 'styled-components'

export const Card = styled.div`
  background-color: #e66767;
  color: #fff;
  border-radius: 1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 7px;
  cursor: pointer;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    img {
      height: 160px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 200px;
    }
  }
`

// ✅ Restaurado o estilo das tags (ex.: "italiana 1 a 2 pessoas")
export const Infos = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 2;

  span {
    background-color: #e66767;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: lowercase;
  }
`

export const Nota = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  z-index: 2;

  span {
    margin-right: 4px;
  }

  img {
    width: 14px;
    height: 14px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 8px;
  padding: 5px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 1.4;
  flex: 1;
  padding: 5px;
`

// ✅ Botão com visual igual ao modal
export const ButtonContainer = styled.button`
  background-color: #ffeadd;
  color: #e66767;
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding: 12px;
  width: 100%;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffc5b5;
  }
`
