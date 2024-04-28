import { Link } from 'react-router-dom'
import Tag from '../Tag'
import styles from './styles'
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
  <styles.Card>
    <img src={imageProduto} />
    <styles.Infos conteudo="ComConteudo">
      <Tag size={'big'}>{category}</Tag>
      {infosFood.map((infosFood) => (
        <Tag key={infosFood}>{infosFood}</Tag>
      ))}
    </styles.Infos>
    <styles.ContainerFlex>
      <styles.Titulo>{title}</styles.Titulo>
      <div>
        <styles.Nota>{punctuation}</styles.Nota>
        <img src={imageNota} />
      </div>
    </styles.ContainerFlex>
    <styles.ContainerCard>
      <styles.Descricao>{description}</styles.Descricao>
      <Link to="/More">
        <Button size="small" bcolor="vermelhoFundo">
          Saiba mais
        </Button>
      </Link>
    </styles.ContainerCard>
  </styles.Card>
)

export default Product
