import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../Header'
import Apresentacao from '../../Apresentacao'
import DishList from '../../DishList'
import Footer from '../../Footer'
import { Food } from '../Home'

const More = () => {
  const { id } = useParams()
  const [dishFood, setDishFood] = useState<Food>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setDishFood(res))
  }, [id])

  if (!dishFood) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Header itens={0} estado={'More'} />
      <Apresentacao food={dishFood} />
      <DishList food={dishFood} />
      <Footer />
    </>
  )
}

export default More
