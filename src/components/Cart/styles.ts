import styled from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../assets/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 3;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 3;
  display: none;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  width: 360px;
  max-width: 100%;
  background-color: ${cores.vermelhoFundo};
  justify-content: spacea-between;
  z-index: 4;
  padding: 32px 8px;
`

export const CardItem = styled.li`
  display: flex;
  background-color: ${cores.vermelhoTexto};
  margin-bottom: 16px;
  padding: 8px 0px 12px 8px;
  position: relative;

  h3 {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.vermelhoFundo};
  }

  p {
    font-size: 14px;
    margin-top: 16px;
    color: ${cores.vermelhoFundo};
  }
  img {
    margin-right: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  button {
    width: 16px;
    height: 16px;
    background-image: url(${fechar});
    background-size: cover;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const TotalDish = styled.p`
  display: flex;
  justify-content: space-beetwen;
  font-size: 14px;
  font-weight: 700;
  span {
    right: 8px;
    position: absolute;
  }
  margin-top: 40px;
  margin-bottom: 16px;
  color: ${cores.vermelhoTexto};
`
export const Center = styled.div`
  text-align: center;

  button {
    width: 100%;
  }
`
export const DeliveryForm = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 10px;
      padding: 8px;
      font-size: 16px;
      width: 100%;
    }
  }
`

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const FormColumn = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const FormButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const PaymentForm = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 10px;
      padding: 8px;
      font-size: 16px;
      width: 100%;
    }
  }
`
