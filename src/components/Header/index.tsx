import styles from './styles'
import logo from '../../assets/logo.png'

const Header = () => (
  <styles.HeaderBar>
    <styles.Container>
      <img src={logo} alt="Efood" />
    </styles.Container>
    <styles.Title>
      Viva experiências gastronômicas no conforto da sua casa
    </styles.Title>
  </styles.HeaderBar>
)

export default Header
