import styled from 'styled-components'
import { Props } from '.'
import { BreakPoint } from '../../styles'

export const styles = {
  Container: styled.section<Omit<Props, 'foods'>>`
    max-width: 1024px;
    position: relative;
    margin: 80px 0 auto;

    @media (max-width: ${BreakPoint.desktop}) {
      max-width: 40%;
    }

    @media (max-width: ${BreakPoint.tablet}) {
      align-items: center;
      margin: 80px auto;
    }
  `,

  List: styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    @media (max-width: ${BreakPoint.desktop}) {
      max-width: 80%;
      column-gap: 20px;
      margin: 0 auto;
    }

    @media (max-width: ${BreakPoint.tablet}) {
      margin: 0 auto;
      grid-template-columns: 1fr;
    }
    }
  `
}
