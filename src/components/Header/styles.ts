import styled from 'styled-components'
import fundo from '../../assets/fundo.png'
import { cores } from '../../styles'
// import { Props } from '.'

export const styles = {
  HeaderStyle: styled.header`
    height: 163px;
    background-image: url(${fundo});
    align-items: center;

    .container {
      max-width: 1024px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
  `,
  Branding: styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 39px;,
`,
  LinkRestaurantes: styled.a`
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${cores.vermelhoFundo};
    margin-top: 39px;
  `,

  TextCart: styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 39px;
    color: ${cores.vermelhoFundo};
  `,

  HeaderHome: styled.div`
    align-items: center;
    text-align: center;
    height: 384px;
    background-image: url(${fundo});
    display: block;
    justify-content: center;
    h2 {
      width: 540px;
      padding-top: 138px;
      text-align: center;
      margin: 0 auto;
      font-size: 36px;
      color: ${cores.vermelhoFundo};
    }
  `
}
//   a {
//     display: ${(props) => (props.estado === 'Home' ? 'none' : 'flex')}
// }

// display: ${(props) => (props.estado === 'More' ? 'flex' : 'none')};
