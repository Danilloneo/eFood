import {
  ApresentacaoContainer,
  ApresentacaoCategoria,
  ApresentacaoPrato
} from './styles'
import { Food } from '../pages/Home'

export type Props = {
  food: Food
}
const Apresentacao = ({ food }: Props) => (
  <ApresentacaoContainer style={{ backgroundImage: `url(${food.capa})` }}>
    <div className="container">
      <ApresentacaoCategoria>{food.tipo}</ApresentacaoCategoria>
      <ApresentacaoPrato>{food.titulo}</ApresentacaoPrato>
    </div>
  </ApresentacaoContainer>
)

export default Apresentacao
