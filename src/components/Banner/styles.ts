import styled from 'styled-components'
import banner from '../../assets/banner.png'
import { cores } from '../../styles'

const styles = {
  Sombra: styled.div`
    width: 100%;
    height: 280px;
    margin-bottom: 80px;
    position: relative;
  `,

  ImgBanner: styled.div`
  width: 100%;
  height: 280px;
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${banner}) no-repeat;
    background-size: cover;
}

`,
  EstiloTitulo1Banner: styled.h2`
    font-size: 32px;
    font-weight: 100;
    padding-top: 26px;
    padding-bottom: 157px;
    color: ${cores.branco};
  `,
  EstiloTitulo2Banner: styled.h3`
    font-size: 32px;
    font-weight: 900;
    color: ${cores.branco};
  `
}

export default styles
