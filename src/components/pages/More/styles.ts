import styled from 'styled-components'
import { cores } from '../../../styles'

const styles = {
  imagemHeader: styled.div`
    width: 100%;
    display: flex;
    height: 186px;
    background-size: cover;
    background-repeat: no-repeat;
    justity-content: center;

    .container {
      width: 100%;
      heigth: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    img {
      display: flex;
      width: auto;
      margin: 0 auto;
    }
  `,

  restauranteTitulo: styled.h2`
    position: relative;
    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelhoFundo};

    a {
      text-decoration: none;
      color: ${cores.vermelhoFundo};
    }
  `,

  Carrinho: styled.p`
    position: relative;
    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelhoFundo};
  `
}

export default styles
