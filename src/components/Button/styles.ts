import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  width: ${(props) => (props.size === 'big' ? '304px' : '82px')};
  padding: 6px 4px;
  background-color: ${(props) =>
    props.bcolor === 'vermelhoTexto'
      ? `${cores.vermelhoTexto}`
      : `${cores.vermelhoFundo}`};
  color: ${(props) =>
    props.bcolor === 'vermelhoFundo'
      ? `${cores.vermelhoTexto}`
      : `${cores.vermelhoFundo}`};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
