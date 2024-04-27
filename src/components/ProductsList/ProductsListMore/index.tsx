import ProductMore from '../../Product/ProductsMore'
import styles from './styles'
import FoodMore from '../../models/foodsMore'

export type Props = {
  foodmore: FoodMore[]
}

const ProductsListMore = ({ foodmore }: Props) => (
  <styles.Container>
    <styles.List>
      {foodmore.map((foodmore) => (
        <ProductMore
          key={foodmore.id}
          titleMore={foodmore.title}
          imageProdutoMore={foodmore.imageProduto}
          descriptionMore={foodmore.description}
        />
      ))}
    </styles.List>
  </styles.Container>
)

export default ProductsListMore
