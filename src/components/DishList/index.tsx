import { useState } from 'react'
import Dish from '../Dish'
import { AddCartButton } from '../Dish/styles'
import { styles } from './styles'
import close from '../../assets/close.png'
import { Food } from '../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../Store/reducers/cart'

export type Props = {
  foods: Food
}

const DishList = ({ foods }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodId, setFoodId] = useState<number | null>(null)
  const [foodTitle, setFoodTitle] = useState('')
  const [foodDescription, setFoodDescription] = useState('')
  const [foodPhoto, setFoodPhoto] = useState('')
  const [foodPhotoAlt, setFoodPhotoAlt] = useState('')
  const [foodServe, setFoodServe] = useState('')
  const [foodPrice, setFoodPrice] = useState(0)
  const dispatch = useDispatch()

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const handleAddToCart = () => {
    if (foodId !== null) {
      dispatch(
        add({
          id: foodId,
          nome: foodTitle,
          descricao: foodDescription,
          porcao: foodServe,
          preco: priceFormat(foodPrice),
          foto: foodPhoto
        })
      )
      dispatch(open())
      setShowModal(false)
    }
  }

  return (
    <>
      <styles.Container>
        <styles.List>
          {foods.cardapio.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
                setFoodId(food.id)
                setFoodTitle(food.nome)
                setFoodDescription(food.descricao)
                setFoodServe(food.porcao)
                setFoodPrice(food.preco)
                setFoodPhotoAlt(food.nome)
                setFoodPhoto(food.foto)
              }}
            >
              <Dish
                DishPhoto={food.foto}
                DishTitle={food.nome}
                DishDescription={food.descricao}
                DishPhotoAlt={food.nome}
              />
            </li>
          ))}
        </styles.List>
      </styles.Container>
      <styles.Modal className={showModal ? 'visible' : ''}>
        <styles.ModalContent>
          <styles.FoodImage src={foodPhoto} alt={foodPhotoAlt} />
          <styles.ModalContainer>
            <styles.FoodTitle>{foodTitle}</styles.FoodTitle>
            <styles.FoodDescription>
              {foodDescription}
              <p>Serve: {foodServe}</p>
            </styles.FoodDescription>
            <AddCartButton to={''} onClick={handleAddToCart}>
              Adicionar ao carrinho - {priceFormat(foodPrice)}
            </AddCartButton>
          </styles.ModalContainer>
          <styles.CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Ícone de fechar"
          />
        </styles.ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </styles.Modal>
    </>
  )
}

export default DishList
