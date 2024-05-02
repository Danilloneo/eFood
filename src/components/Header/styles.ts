import styled from 'styled-components'

import { cores } from '../../styles'

const styles = {
  imagemHeader: styled.div`
    width: 100%;
    display: flex;
    height: 386px;
    background-size: cover;
    background-repeat: no-repeat;
    justity-content: center;
    margin-bottom: 80px;

    .container {
      width: 100%;
      heigth: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      position: relative;
    }

    img {
      display: block;
      width: auto;
      margin: 0 auto;
      padding-bottom: 138px;
    }

    h2 {
      font-size: 36px;
      font-weight: 900;
      color: ${cores.vermelhoFundo};
    }

    div {
      margin: 0 auto;
      width: 540px;
    }
  `
}

export default styles
