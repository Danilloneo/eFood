import { FooterBar, Container, Encerramento } from './styles'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import github from '../../assets/GithubC.png'

const Footer = () => (
  <FooterBar>
    <Container>
      <img src={logo} alt="Efood" />
      <br />
      <a
        href="https://www.instagram.com/danilloneo/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="instagram"
          src={instagram}
          alt="Instagram"
          title="Instagram"
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61555010691801"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="facebook"
          src={facebook}
          alt="Facebook"
          title="Facebook"
        />
      </a>
      <a href="https://github.com/Danilloneo" target="_blank" rel="noreferrer">
        <img className="git" src={github} alt="github" title="Github" />
      </a>
      <Encerramento>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Encerramento>
    </Container>
  </FooterBar>
)

export default Footer
