import { Link } from 'react-router-dom'
import styles from './styles'
import Button from '../../Button'

export type Props = {
  titleMore: string
  descriptionMore: string
  imageProdutoMore: string
}

const ProductMore = ({
  titleMore,
  descriptionMore,
  imageProdutoMore
}: Props) => (
  <styles.CardMore>
    <img src={imageProdutoMore} />
    <styles.ContainerFlexMore>
      <styles.TituloMore>{titleMore}</styles.TituloMore>
    </styles.ContainerFlexMore>
    <styles.DescricaoMore>{descriptionMore}</styles.DescricaoMore>
    <Link to="/More">
      <Button size="big" bcolor="vermelhoTexto">
        Adicionar ao carrinho
      </Button>
    </Link>
  </styles.CardMore>
)

export default ProductMore
