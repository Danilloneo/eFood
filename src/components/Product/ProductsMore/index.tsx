import { Link } from 'react-router-dom'
import {
  CardMore,
  TituloMore,
  DescricaoMore,
  ContainerFlexMore
} from './styles'
import Button from '../../Button'

export type Props = {
  titleMore: string
  descriptionMore: string
  imageProdutoMore: string
}

const ProductMore = ({
  titleMore,
  descriptionMore,
  imageProdutoMore
}: Props) => (
  <CardMore>
    <img src={imageProdutoMore} />
    <ContainerFlexMore>
      <TituloMore>{titleMore}</TituloMore>
    </ContainerFlexMore>
    <DescricaoMore>{descriptionMore}</DescricaoMore>
    <Link to="/More">
      <Button size="big" bcolor="vermelhoTexto">
        Adicionar ao carrinho
      </Button>
    </Link>
  </CardMore>
)

export default ProductMore
