import { useState } from 'react'
import Product from '../Product'
import { Food } from '../pages/Home'
import { Container, List } from './styles'

export type Props = {
  food: Food[]
}

const ProductsList = ({ food }: Props) => {
  const [destaque, setDestaque] = useState('Destaque da semana')
  return (
    <Container>
      <List>
        {food.map((food) => (
          <Product
            key={food.id}
            foodTitle={food.titulo}
            foodRate={food.avaliacao}
            foodDetails={food.descricao}
            foodPhoto={food.capa}
            foodCategories={[food.tipo, food.destacado ? destaque : '']}
            foodToLink={`/food/${food.id}`}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductsList
