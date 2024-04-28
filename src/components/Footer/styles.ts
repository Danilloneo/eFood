import styled from 'styled-components'
import bg from '../../assets/fundo.png'
import { cores } from '../../styles'

// export const FooterBar = styled.div`
//   width: 100%;
//   height: 384px;
//   background-image: url(${bg});
//   background-size: cover;
//   background-repeat: no-repeat;
//   position: relative;
//   margin-top: 120px;
//   img {
//     margin-bottom: 32px;
//   }
// `

// export const Container = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   text-align: center;
//   padding-top: 64px;
//   .git {
//     width: 24px;
//     margin-left: 8px;
//   }

//   .git:hover {
//     transform: scale(1.4);
//   }

//   .facebook {
//     margin-left: 8px;
//   }

//   .facebook:hover {
//     margin-left: 8px;
//     transform: scale(1.4);
//   }

//   .instagram:hover {
//     transform: scale(1.4);
//   }
// `

// export const Encerramento = styled.p`
//   color: ${cores.vermelhoFundo};
//   width: 480px;
//   font-size: 10px;
//   margin: 0 auto;
//   padding-top: 80px;
// `

const styles = {
  FooterBar: styled.footer`
    width: 100%;
    height: 384px;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 120px;
    img {
      margin-bottom: 32px;
    }
  `,
  Container: styled.div`
    width: 1024px;
    margin: 0 auto;
    text-align: center;
    padding-top: 64px;
    .git {
      width: 24px;
      margin-left: 8px;
    }

    .git:hover {
      transform: scale(1.4);
    }

    .facebook {
      margin-left: 8px;
    }

    .facebook:hover {
      margin-left: 8px;
      transform: scale(1.4);
    }

    .instagram:hover {
      transform: scale(1.4);
    }
  `,
  Encerramento: styled.p`
    color: ${cores.vermelhoFundo};
    width: 480px;
    font-size: 10px;
    margin: 0 auto;
    padding-top: 80px;
  `
}

export default styles
