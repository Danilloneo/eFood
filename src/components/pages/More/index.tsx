import { Link } from 'react-router-dom'
import styles from './styles'
import bgHeader from '../../../assets/fundo.png'
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

const More = () => {
  return (
    <>
      <styles.imagemHeader style={{ backgroundImage: `url(${bgHeader})` }}>
        <div className="container">
          <styles.restauranteTitulo>
            <Link to="/" title="Ir para Restaurantes">
              Restaurantes{' '}
            </Link>
          </styles.restauranteTitulo>
          <Link to="/" title="Ir para Restaurantes">
            <img src={logo} alt="Efood" />
          </Link>
          <styles.Carrinho>0 produto(s) no carrinho</styles.Carrinho>
        </div>
      </styles.imagemHeader>
      <Banner />
      <ProductsListMore foodmore={foodmoreDestaques} />
      <Footer />
    </>
  )
}

export default More
