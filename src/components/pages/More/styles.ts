import styled from 'styled-components'
import bg from '../../../assets/fundo.png'
import { cores } from '../../../styles'

const styles = {
  ContainerHeader: styled.div`
    width: 100%;
    display: flex;
    vertical-align: center;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;

    img {
      display: flex;
      width: auto;
      margin: 0 auto;
    }
  `,

  VariacaoHeader: styled.header`
    width: 1024px;
    height: 186px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin: 0 auto;
      padding-left: 80px;
    }
  `,

  containerTitulo: styled.h2`
    justify-content: start;
    align-items: center;
    position: relative;
    display: flex;
    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelhoFundo};
  `,

  Carrinho: styled.p`
    margin: 0 auto;
    position: relative;
    display: flex;
    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelhoFundo};
  `
}

export default styles
