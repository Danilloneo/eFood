import styled from 'styled-components'
import bg from '../../../assets/fundo.png'
import { cores } from '../../../styles'

const styles = {
  ContainerHeader: styled.div`
    width: 100%;
    padding: 0 240px;
    display: flex;
    justify-content: space-between;
    nargin: 0 auto;
  `,

  VariacaoHeader: styled.header`
  width: 100%;
  height: 186px;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 80px;
  align-items: center;
  display: flex;,
`,

  VariacaoContainer: styled.div`
    width: 38px;
    margin: 0 auto;
    align-items: center;
  `,

  TituloMore: styled.h2`
    font-size: 18px;
    font-weight: bold;
    color: ${cores.vermelhoFundo};
  `,

  Carrinho: styled.p`
    font-size: 18px;
    font-weight: bold;
    color: ${cores.vermelhoFundo};
  `
}

export default styles
