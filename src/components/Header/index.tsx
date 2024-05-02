import styles from './styles'
import logo from '../../assets/logo.png'
import bgHeader from '../../assets/fundo.png'

const Header = () => (
  <styles.imagemHeader style={{ backgroundImage: `url(${bgHeader})` }}>
    <div className="container">
      <div>
        <img src={logo} />
        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
      </div>
    </div>
  </styles.imagemHeader>
)

export default Header
