import { Link } from 'react-router-dom'
import styles from './styles'
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
    <styles.ContainerHeader>
      <styles.VariacaoHeader>
        <styles.containerTitulo>Restaurantes</styles.containerTitulo>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <div>
          <styles.Carrinho>0 produto(s) no carrinho</styles.Carrinho>
        </div>
      </styles.VariacaoHeader>
    </styles.ContainerHeader>
    <Banner />
    <ProductsListMore foodmore={foodmoreDestaques} />
    <Footer />
  </>
)

export default More
