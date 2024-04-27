import ProductMore from '../../Product/ProductsMore'
import { Container, List } from './styles'
import FoodMore from '../../models/foodsMore'

export type Props = {
  foodmore: FoodMore[]
}

const ProductsListMore = ({ foodmore }: Props) => (
  <Container>
    <List>
      {foodmore.map((foodmore) => (
        <ProductMore
          key={foodmore.id}
          titleMore={foodmore.title}
          imageProdutoMore={foodmore.imageProduto}
          descriptionMore={foodmore.description}
        />
      ))}
    </List>
  </Container>
)

export default ProductsListMore
