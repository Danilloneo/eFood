import { useState } from 'react'
import Product from '../Product'
import { Food } from '../pages/Home'
import { styles } from './styles'

export type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
  const [destaque] = useState('Destaque da semana')
  return (
    <div className="container">
      <styles.Container>
        <styles.List>
          {foods.map((food) => (
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
        </styles.List>
      </styles.Container>
    </div>
  )
}

export default ProductsList
