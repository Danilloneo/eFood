import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'food'>>`
  width: 1024px;
  position: relative;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
