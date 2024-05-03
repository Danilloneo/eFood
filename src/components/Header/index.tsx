import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { styles } from './styles'

export type Props = {
  itens?: number
  estado?: 'Home' | 'More'
}

const Header = ({ itens = 0, estado = 'Home' }: Props) => {
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
          <styles.TextCart> {itens} produto(s) no carrinho</styles.TextCart>
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
