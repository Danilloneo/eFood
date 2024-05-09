import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { styles } from './styles'
import { open } from '../../Store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

export type Props = {
  estado?: 'Home' | 'More'
}

const Header = ({ estado = 'Home' }: Props) => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)

  if (estado === 'More') {
    return (
      <styles.HeaderStyle>
        <div className="container">
          <styles.LinkRestaurantes
            href="/"
            title="Ir para a página Restaurante"
          >
            Restaurantes
          </styles.LinkRestaurantes>
          <Link to="/">
            <styles.Branding
              src={logo}
              alt="Logo do restaurante"
              title="Ir para a página Restaurante"
            />
          </Link>
          <styles.CartButton onClick={openCart} title="Abrir carrinho">
            {' '}
            {items.length} produto(s) no carrinho
          </styles.CartButton>
        </div>
      </styles.HeaderStyle>
    )
  }
  return (
    <styles.HeaderHome>
      <styles.HeaderStyle>
        <styles.Branding src={logo} alt="Logo do restaurante" />

        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
      </styles.HeaderStyle>
    </styles.HeaderHome>
  )
}

export default Header
