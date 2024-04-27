import { Link } from 'react-router-dom'
import {
  VariacaoHeader,
  VariacaoContainer,
  ContainerHeader,
  TituloMore,
  Carrinho
} from './styles'
import logo from '../../../assets/logo.png'
import Banner from '../../Banner'
import ProductsListMore from '../../ProductsList/ProductsListMore'
import FoodMore from '../../models/foodsMore'
import Pizzinha from '../../../assets/produtoMore.png'
import Footer from '../../Footer'

const foodmoreDestaques: FoodMore[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    imageProduto: Pizzinha,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    imageProduto: Pizzinha,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    imageProduto: Pizzinha,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    imageProduto: Pizzinha,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    imageProduto: Pizzinha,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    imageProduto: Pizzinha,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const More = () => (
  <>
    <VariacaoHeader>
      <ContainerHeader>
        <TituloMore>Restaurantes</TituloMore>
        <VariacaoContainer>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
        </VariacaoContainer>

        <Carrinho>
          <span>0</span> produto(s) no carrinho
        </Carrinho>
      </ContainerHeader>
    </VariacaoHeader>
    <Banner />
    <ProductsListMore foodmore={foodmoreDestaques} />
    <Footer />
  </>
)

export default More
