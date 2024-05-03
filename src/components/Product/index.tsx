import { Link } from 'react-router-dom'
import Tag from '../Tag'
import styles from './styles'
import Button from '../Button'
import imageNota from '../../assets/estrela.png'
import { Food } from '../pages/Home'

type Props = {
  foodTitle: string
  foodRate: number
  foodDetails: string
  foodPhoto: string
  foodCategories: string[]
  foodToLink: string
}

const Product = ({
  foodTitle,
  foodRate,
  foodDetails,
  foodPhoto,
  foodCategories,
  foodToLink
}: Props) => {
  if (!fetch) {
    return (
      <>
        <h3>Carregando</h3>
      </>
    )
  }
  return (
    // <styles.Card>
    //   <img src={imageProduto} />
    //   <styles.Infos conteudo="ComConteudo">
    //     <Tag size={'big'}>{getDestaque()}</Tag>
    //     {infosFood.map((infosFood) => (
    //       <Tag key={infosFood}>{infosFood}</Tag>
    //     ))}
    //   </styles.Infos>
    //   <styles.ContainerFlex>
    //     <styles.Titulo>{title}</styles.Titulo>
    //     <div>
    //       <styles.Nota>{punctuation}</styles.Nota>
    //       <img src={imageNota} />
    //     </div>
    //   </styles.ContainerFlex>
    //   <styles.ContainerCard>
    //     <styles.Descricao>{description}</styles.Descricao>
    //     <Link to="/More">
    //       <Button size="small" bcolor="vermelhoFundo">
    //         Saiba mais
    //       </Button>
    //     </Link>
    //  </styles.ContainerCard>
    // </styles.Card>

    <styles.Card>
      <img src={foodPhoto} alt="" />
      <styles.Infos>
        {foodCategories.map((info) => {
          if (info) {
            return <Tag key={info}>{info}</Tag>
          }
        })}
      </styles.Infos>
      <div className="container">
        <styles.ContainerFlex>
          <styles.Titulo>{foodTitle}</styles.Titulo>
          <div>
            <styles.Nota>{foodRate}</styles.Nota>

            <img src={imageNota} alt="Estrela amarela" />
          </div>
        </styles.ContainerFlex>
      </div>
      <styles.ContainerCard>
        <styles.Descricao>{foodDetails}</styles.Descricao>
        <Link to={foodToLink}>
          <Button>Saiba mais</Button>
        </Link>
      </styles.ContainerCard>
    </styles.Card>
  )
}

export default Product
