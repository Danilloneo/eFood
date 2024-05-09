import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
import Header from '../../Header'
import Apresentacao from '../../Apresentacao'
import DishList from '../../DishList'
import Footer from '../../Footer'
import { useGetFoodQuery } from '../../../services/api'
import Cart from '../../Cart'

// import { Food } from '../Home'

// const { data: food } = useGetFoodQuery(id)

const More = () => {
  const { id } = useParams()
  const { data: dishFood } = useGetFoodQuery(id!)

  // console.log(useGetFoodQuery(id!))

  // const [dishFood, setDishFood] = useState<Food>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setDishFood(res))
  // }, [id])

  if (!dishFood) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Header itens={0} estado={'More'} />
      <Apresentacao food={dishFood} />
      <DishList foods={dishFood} />
      <Footer />
      <Cart />
    </>
  )
}

export default More
