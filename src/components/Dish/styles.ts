import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores, BreakPoint } from '../../styles'

export const styles = {
  Card: styled.div`
    background-color: ${cores.vermelhoFundo};
    color: ${cores.begeClaro};
    max-width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Photo: styled.img`
    margin: 8px;
    max-width: 304px;
    max-height: 167px;
    width: 100%;
    object-fit: cover;
    @media (max-width: ${BreakPoint.desktop}) {
      object-fit: cover;
      max-width: 244px;

      max-height: 167px;
      width: 100%;
      height: 100px;
    }
  `,

  Title: styled.h3`
    font-size: 16px;
    font-weight: 900;
    margin: 0 8px;
  `,

  Description: styled.p`
    font-size: 14px;
    margin: 8px 8px 0px 8px;
  `
}

export const AddCartButton = styled(Link)`
  background-color: ${cores.vermelhoTexto};
  color: ${cores.vermelhoFundo};
  border: none;
  padding: 4px 7px;
  margin: 8px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
