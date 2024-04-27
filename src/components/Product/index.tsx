import { Link } from 'react-router-dom'
import Tag from '../Tag'
import {
  Card,
  Titulo,
  Descricao,
  ContainerFlex,
  ContainerCard,
  Nota,
  Infos
} from './styles'
import Button from '../Button'

export type Props = {
  title: string
  category: string
  infosFood: string[]
  description: string
  imageProduto: string
  imageNota: string
  punctuation: string
  conteudo: 'ComConteudo' | 'SemConteudo'
}
export type InfosProps = Omit<
  Props,
  | 'infosFood'
  | 'punctuation'
  | 'imageNota'
  | 'category'
  | 'title'
  | 'description'
  | 'imageProduto'
>

const Product = ({
  title,
  category,
  infosFood,
  description,
  imageProduto,
  imageNota,
  punctuation
}: Props) => (
  <Card>
    <img src={imageProduto} />
    <Infos conteudo="ComConteudo">
      <Tag size={'big'}>{category}</Tag>
      {infosFood.map((infosFood) => (
        <Tag key={infosFood}>{infosFood}</Tag>
      ))}
    </Infos>
    <ContainerFlex>
      <Titulo>{title}</Titulo>
      <div>
        <Nota>{punctuation}</Nota>
        <img src={imageNota} />
      </div>
    </ContainerFlex>
    <ContainerCard>
      <Descricao>{description}</Descricao>
      <Link to="/More">
        <Button size="small" bcolor="vermelhoFundo">
          Saiba mais
        </Button>
      </Link>
    </ContainerCard>
  </Card>
)

export default Product
