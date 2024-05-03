import { Card, Photo, Title, Description, AddCartButton } from './styles'

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
    <Card>
      <Photo src={DishPhoto} alt={DishPhotoAlt} />
      <Title>{DishTitle}</Title>
      <Description>{reduceDescription(DishDescription)}</Description>
      <AddCartButton to={''}>Adicionar ao carrinho</AddCartButton>
    </Card>
  )
}

export default Dish
