import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'foodmore'>>`
  position: relative;
  margin: 0 auto;
  max-width: 1024px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`
