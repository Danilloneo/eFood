import { useState } from 'react'
import Dish from '../Dish'
import { AddCartButton } from '../Dish/styles'
import { styles } from './styles'
import close from '../../assets/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../Store/reducers/cart'

export type Food = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type Props = {
  foods: { cardapio: Food[] }
}

export const priceFormat = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const DishList = ({ foods }: Props) => {
  const [modalState, setModalState] = useState<{
    showModal: boolean
    selectedFood?: Food
  }>({
    showModal: false
  })

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (modalState.selectedFood) {
      dispatch(
        add({
          id: modalState.selectedFood.id,
          nome: modalState.selectedFood.nome,
          descricao: modalState.selectedFood.descricao,
          porcao: modalState.selectedFood.porcao,
          preco: modalState.selectedFood.preco,
          foto: modalState.selectedFood.foto
        })
      )
      dispatch(open())
      setModalState((prev) => ({ ...prev, showModal: false }))
    }
  }

  const handleDishClick = (food: Food) => {
    setModalState({
      showModal: true,
      selectedFood: food
    })
  }

  return (
    <>
      <styles.Container>
        <styles.List>
          {foods.cardapio.map((food) => (
            <li key={food.id} onClick={() => handleDishClick(food)}>
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
      {modalState.showModal && modalState.selectedFood && (
        <styles.Modal className="visible">
          <styles.ModalContent>
            <styles.FoodImage
              src={modalState.selectedFood.foto}
              alt={modalState.selectedFood.nome}
            />
            <styles.ModalContainer>
              <styles.FoodTitle>
                {modalState.selectedFood.nome}
              </styles.FoodTitle>
              <styles.FoodDescription>
                {modalState.selectedFood.descricao}
                <p>Serve: {modalState.selectedFood.porcao}</p>
              </styles.FoodDescription>
              <AddCartButton to={''} onClick={handleAddToCart}>
                Adicionar ao carrinho -{' '}
                {priceFormat(modalState.selectedFood.preco)}
              </AddCartButton>
            </styles.ModalContainer>
            <styles.CloseIcon
              onClick={() =>
                setModalState((prev) => ({ ...prev, showModal: false }))
              }
              src={close}
              alt="Ícone de fechar"
            />
          </styles.ModalContent>
          <div
            onClick={() =>
              setModalState((prev) => ({ ...prev, showModal: false }))
            }
            className="overlay"
          ></div>
        </styles.Modal>
      )}
    </>
  )
}

export default DishList
