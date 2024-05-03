import styled from 'styled-components'
import { AddCartButton } from '../Dish/styles'
import { cores } from '../../styles'

export const styles = {
  Container: styled.div`
    max-width: 1024px;
    margin: 80px auto;
    li {
      list-style: none;
    }
  `,
  List: styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
  `,
  Modal: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justiry-content: center;
    z-index: 2;

    &.visible {
      display: flex;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  `,
  ModalContent: styled.div`
    margin: 0 auto;
    max-width: 1024px;
    background-color: ${cores.vermelhoFundo};
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 3;

    ${AddCartButton} {
      margin: 0;
    }
  `,
  FoodImage: styled.img`
    object-fit: cover;
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
    object-fit: cover;
  `,
  ModalContainer: styled.div`
    max-width: 656px;
    width: 100%;
    margin-top: 32px;
  `,
  FoodTitle: styled.h3`
    font-size: 18px;
    font-weight: 900;
    color: ${cores.branco};
    line-height: 21.09px;
    display: block;
  `,
  FoodDescription: styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${cores.branco};
    line-height: 22px;
    width: 100%;
    margin: 16px 0 16px 0;
    p {
      margin-top: 16px;
    }
  `,
  CloseIcon: styled.img`
    max-width: 16px;
    max-height: 16px;
    width: 100%;
    margin: 8px;
    cursor: pointer;
  `
}
