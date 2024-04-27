import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelhoFundo};
  color: ${cores.vermelhoTexto};
  width: ${(props) => (props.size === 'big' ? '122px' : 'auto')};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  text-align: center;
  margin-right: 8px;
  display: inline-flex;
`
