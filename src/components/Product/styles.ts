import styled from 'styled-components'
import { cores } from '../../styles'
// import { TagContainer } from '../Tag/styles'
import { InfosProps } from '.'

const styles = {
  Card: styled.div`
    background-color: ${cores.alicate};
    width: 472px;
    margin-bottom: 48px;
    position: relative;
    border-left: 1px solid ${cores.vermelhoFundo};
    border-right: 1px solid ${cores.vermelhoFundo};
    border-bottom: 1px solid ${cores.vermelhoFundo};
  `,
  Titulo: styled.h3`
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-right: 8px;
    color: ${cores.vermelhoFundo};
    align-items: center;
  `,
  Nota: styled.span`
    color: ${cores.vermelhoFundo};
    font-size: 18px;
    font-weight: 900;
    padding-right: 8px;
  `,
  ContainerFlex: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px 16px 8px;
  `,
  Descricao: styled.p`
    font-size: 14px;
    display: block;
    width: 456px;
    color: ${cores.vermelhoFundo};
    padding-bottom: 16px;
  `,
  ContainerCard: styled.div`
    padding: 0 8px 16px 8px;
  `,
  Infos: styled.div<InfosProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  display: ${(props) => (props.conteudo === 'ComConteudo' ? 'flex' : 'none')};
  }
`
}

export default styles
