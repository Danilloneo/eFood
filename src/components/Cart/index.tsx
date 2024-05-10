import { RootReducer } from '../../Store'
import Button from '../Button'
// import pratoCarrinho from '../../assets/produtoMore.png'
import { close, remove } from '../../Store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { priceFormat } from '../../components/DishList'

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
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <div className="container"></div>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{item.preco}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CardItem>
          ))}
        </ul>
        <TotalDish>
          Valor total <span>{priceFormat(getTotalPrice())} </span>
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
