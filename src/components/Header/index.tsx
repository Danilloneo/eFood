import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {
  Branding,
  LinkRestaurantes,
  TextCart,
  HeaderStyle,
  HeaderHome
} from './styles'

export type Props = {
  itens?: number
  estado?: 'Home' | 'More'
}

const Header = ({ itens = 0, estado = 'Home' }: Props) => {
  if (estado === 'More') {
    return (
      <HeaderStyle>
        <div className="container">
          <LinkRestaurantes href="/" title="Ir para a página Restaurante">
            Restaurantes
          </LinkRestaurantes>
          <Link to="/">
            <Branding
              src={logo}
              alt="Logo do restaurante"
              title="Ir para a página Restaurante"
            />
          </Link>
          <TextCart> {itens} produto(s) no carrinho</TextCart>
        </div>
      </HeaderStyle>
    )
  }
  return (
    <HeaderHome>
      <HeaderStyle>
        <Branding src={logo} alt="Logo do restaurante" />

        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
      </HeaderStyle>
    </HeaderHome>
  )
}

export default Header
