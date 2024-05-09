import { RootReducer } from '../../Store'
import Button from '../Button'
import pratoCarrinho from '../../assets/produtoMore.png'
import { close } from '../../Store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import {
  Overlay,
  CartContainer,
  Sidebar,
  TotalDish,
  CardItem,
  Center
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <div className="container"></div>
      <Sidebar>
        <ul>
          {items.map(
            (item = (
              <CardItem key={item.}>
                <img src={pratoCarrinho} />
                <div>
                  <h3>Nome do Prato</h3>
                  <p>R$: 60,90</p>
                </div>
                <button type="button" title="Excluir item" />
              </CardItem>
            ))
          )}
          <CardItem>
            <img src={pratoCarrinho} />
            <div>
              <h3>Nome do Prato</h3>
              <p>R$: 60,90</p>
            </div>
            <button type="button" title="Excluir item" />
          </CardItem>
        </ul>
        <TotalDish>
          Valor total <span>R$ 60,90</span>
        </TotalDish>
        <Center>
          <Button
            title="Clique aqui para continuar com a compra"
            bcolor="vermelhoTexto"
          >
            Continuar com a Compra
          </Button>
        </Center>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
