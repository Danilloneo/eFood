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

// key = { food.id }
// DishPhoto = { food.foto }
// DishTitle = { food.nome }
// DishDescription = { food.descricao }
// DishPhotoAlt = { food.nome }

const DishList = ({ foods }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(foods))
    dispatch(open())
  }

  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setfoodTitle] = useState('')
  const [foodDescription, setfoodDescription] = useState('')
  const [foodPhoto, setfoodPhoto] = useState('')
  const [foodPhotoAlt, setfoodPhotoAlt] = useState('')
  const [foodServe, setfoodServe] = useState('')
  const [foodPrice, setfoodPrice] = useState(0)
  const priceFormat = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
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
                setfoodTitle(food.nome)
                setfoodDescription(food.descricao)
                setfoodServe(food.porcao)
                setfoodPrice(food.preco)
                setfoodPhotoAlt(food.nome)
                setfoodPhoto(food.foto)
              }}
            >
              <Dish
                key={food.id}
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
            <AddCartButton to={''} onClick={addToCart}>
              Adicionar ao carrinho - {priceFormat(foodPrice)}
            </AddCartButton>
          </styles.ModalContainer>
          <styles.CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Icone de fechar"
          />
        </styles.ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </styles.Modal>
    </>
  )
}

export default DishList
