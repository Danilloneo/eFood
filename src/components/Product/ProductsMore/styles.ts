import styled from 'styled-components'
import { cores } from '../../../styles'

export const CardMore = styled.div`
  background-color: ${cores.vermelhoFundo};
  width: 320px;
  margin-bottom: 48px;
  position: relative;
  padding: 8px;
`
export const TituloMore = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${cores.vermelhoTexto};
  align-items: center;
`
export const ContainerFlexMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DescricaoMore = styled.p`
  font-size: 14px;
  display: block;
  width: 100%;
  color: ${cores.vermelhoTexto};
  padding-bottom: 16px;
`
