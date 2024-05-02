import { useEffect, useState } from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import ProductsList from '../../ProductsList'
// import Food from '../../models/foods'
// import sushi from '../../../assets/Sushi.png'
// import trattoria from '../../../assets/trattoria.png'
// import estrela from '../../../assets/estrela.png'

// const foodDestaques: Food[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     imageProduto: sushi,
//     category: 'Destaque da Semana',
//     infosFood: ['Japonesa'],
//     punctuation: '4,9',
//     imageNota: estrela,
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     imageProduto: trattoria,
//     category: 'Destaque da Semana',
//     infosFood: ['Italiana'],
//     punctuation: '4,6',
//     imageNota: estrela,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     imageProduto: trattoria,
//     category: 'Destaque da Semana',
//     infosFood: ['Italiana'],
//     punctuation: '4,6',
//     imageNota: estrela,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   },
//   {
//     id: 4,
//     title: 'La Dolce Vita Trattoria',
//     imageProduto: trattoria,
//     category: 'Destaque da Semana',
//     infosFood: ['Italiana'],
//     punctuation: '4,6',
//     imageNota: estrela,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   },
//   {
//     id: 5,
//     title: 'La Dolce Vita Trattoria',
//     imageProduto: trattoria,
//     category: 'Destaque da Semana',
//     infosFood: ['Italiana'],
//     punctuation: '4,6',
//     imageNota: estrela,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     imageProduto: trattoria,
//     category: 'Destaque da Semana',
//     infosFood: ['Italiana'],
//     punctuation: '4,6',
//     imageNota: estrela,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   }
// ]

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
  const [food, setFood] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <ProductsList food={food} />
      </div>
      <Footer />
    </>
  )
}

export default Home
