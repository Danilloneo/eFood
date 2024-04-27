import { HeaderBar, Title, Container } from './styles'
import logo from '../../assets/logo.png'

const Header = () => (
  <HeaderBar>
    <Container>
      <img src={logo} alt="Efood" />
    </Container>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderBar>
)

export default Header
