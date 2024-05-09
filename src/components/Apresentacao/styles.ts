import styled from 'styled-components'

import { cores } from '../../styles'

export const styles = {
  ApresentacaoContainer: styled.div`
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .container {
      position: relative;
      max-width: 1024px;
      margin: 0 auto;
      z-index: 2;
    }
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
      z-index: 0;
    }
  `,
  ApresentacaoCategoria: styled.p`
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 100;
    padding-top: 25px;
  `,
  ApresentacaoPrato: styled.p`
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 900;
    padding-top: 156.5px;
  `
}
