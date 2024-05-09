import { styles, AddCartButton } from './styles'
import { add } from '../../Store/reducers/cart'
import { useDispatch } from 'react-redux'

export type Props = {
  DishPhoto: string
  DishTitle: string
  DishDescription: string
  DishPhotoAlt: string
}
export const reduceDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}
const Dish = ({
  DishPhoto,
  DishTitle,
  DishDescription,
  DishPhotoAlt
}: Props) => {
  return (
    <styles.Card>
      <styles.Photo src={DishPhoto} alt={DishPhotoAlt} />
      <styles.Title>{DishTitle}</styles.Title>
      <styles.Description>
        {reduceDescription(DishDescription)}
      </styles.Description>
      <AddCartButton to={''}>Adicionar ao carrinho</AddCartButton>
    </styles.Card>
  )
}

export default Dish
