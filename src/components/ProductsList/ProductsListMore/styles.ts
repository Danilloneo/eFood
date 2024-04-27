import styled from 'styled-components'
import { Props } from '.'

const styles = {
  Container: styled.section<Omit<Props, 'foodmore'>>`
    position: relative;
    margin: 0 auto;
    max-width: 1024px;
  `,

  List: styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
  `
}

export default styles
