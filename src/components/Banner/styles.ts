import styled from 'styled-components'
import { cores } from '../../styles'
import bannerImg from '../../assets/apresentacao.png'

export const ImgBanner = styled.div`
  width: 100%;
  height: 400px;
  display: block;
  margin-top: -80px;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 80px;

  h3 {
    font-size: 32px;
    font-weight: 100;
    color: ${cores.vermelhoTexto};
    padding-top: 25px;
    margin-left: 171px;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${cores.alicate};
    padding-top: 156px;
    padding-bottom: 32px;
    margin-left: 171px;
  }
`
