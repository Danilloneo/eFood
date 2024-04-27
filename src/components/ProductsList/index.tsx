import Product from '../Product'
import { Container, List } from './styles'
import Food from '../models/foods'

export type Props = {
  food: Food[]
}

const ProductsList = ({ food }: Props) => (
  <Container>
    <List>
      {food.map((food) => (
        <Product
          key={food.id}
          title={food.title}
          imageProduto={food.imageProduto}
          category={food.category}
          infosFood={food.infosFood}
          punctuation={food.punctuation}
          imageNota={food.imageNota}
          description={food.description}
          conteudo={'ComConteudo'}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
