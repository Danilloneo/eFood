import styled from 'styled-components'
import bg from '../../assets/fundo.png'
import { cores } from '../../styles'

const styles = {
  HeaderBar: styled.header`
    width: 100%;
    height: 384px;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    margin-bottom: 80px;
    display: block;
    align-items: center;
  `,

  Title: styled.h2`
    color: ${cores.vermelhoFundo};
    width: 540px;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    padding-top: 140px;
    padding-bottom: 40px;
    margin: 0 auto;
  `,
  Container: styled.div`
    width: 1024px;
    margin: 0 auto;
    padding-top: 64px;
    aling-items: center;
    display: flex;

    img {
      margin: 0 auto;
    }
  `
}
export default styles
