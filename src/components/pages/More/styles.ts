import styled from 'styled-components'
import bg from '../../../assets/fundo.png'
import { cores } from '../../../styles'

export const ContainerHeader = styled.div`
  width: 100%;
  padding: 0 240px;
  display: flex;
  justify-content: space-between;
  nargin: 0 auto;
`

export const VariacaoHeader = styled.header`
  width: 100%;
  height: 186px;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 80px;
  align-items: center;
  display: flex;
`
export const VariacaoContainer = styled.div`
  width: 38px;
  margin: 0 auto;
  align-items: center;
`

export const TituloMore = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelhoFundo};
`

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelhoFundo};
`
