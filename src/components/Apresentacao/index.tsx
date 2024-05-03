import { styles } from './styles'
import { Food } from '../pages/Home'

export type Props = {
  food: Food
}
const Apresentacao = ({ food }: Props) => (
  <styles.ApresentacaoContainer
    style={{ backgroundImage: `url(${food.capa})` }}
  >
    <div className="container">
      <styles.ApresentacaoCategoria>{food.tipo}</styles.ApresentacaoCategoria>
      <styles.ApresentacaoPrato>{food.titulo}</styles.ApresentacaoPrato>
    </div>
  </styles.ApresentacaoContainer>
)

export default Apresentacao
