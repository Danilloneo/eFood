import styled from 'styled-components'
import { cores } from '../../styles'
// import { TagContainer } from '../Tag/styles'
import { InfosProps } from '.'

export const Card = styled.div`
  background-color: ${cores.alicate};
  width: 472px;
  margin-bottom: 48px;
  position: relative;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-right: 8px;
  color: ${cores.vermelhoFundo};
  align-items: center;
`
export const Nota = styled.span`
  color: ${cores.vermelhoFundo};
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;
`
export const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 16px 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  display: block;
  width: 456px;
  color: ${cores.vermelhoFundo};
  padding-bottom: 16px;
`

export const ContainerCard = styled.div`
  padding: 0 8px 16px 8px;
`

export const Infos = styled.div<InfosProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  display: ${(props) => (props.conteudo === 'ComConteudo' ? 'flex' : 'none')};
  }
`
