import { createGlobalStyle } from 'styled-components'

export const cores = {
  alicate: '#ffffff',
  begeClaro: '#fff8f2',
  vermelhoFundo: '#e66767',
  vermelhoTexto: '#ffebd9',
  branco: '#FFFFFF'
}
//card home
//todo o body
//vermelhoClaro todo texto inclusive h2

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Sans-Serif;
    list-style: none;
  }

  body {
    background-color: ${cores.begeClaro};

  }

  .container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  }
`
