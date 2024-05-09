// import { useEffect, useState } from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import ProductsList from '../../ProductsList'

import { useGetRestaurantQuery } from '../../../services/api'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  // const [food, setFood] = useState<Food[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setFood(res))
  // }, [])
  const { data: food } = useGetRestaurantQuery()
  if (!food) {
    return (
      <center>
        <h4>Carrregando...</h4>
      </center>
    )
  }
  return (
    <>
      <Header estado={'Home'} />
      <div className="container">
        <ProductsList foods={food} />
      </div>
      <Footer />
    </>
  )
}

export default Home
