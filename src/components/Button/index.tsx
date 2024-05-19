import { ButtonContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  bcolor?: 'vermelhoFundo' | 'vermelhoTexto'
  title?: string
  children: string
  onClick?: () => void
  style?: React.CSSProperties // Adicionei a propriedade style
}

const Button = ({
  size = 'small',
  bcolor = 'vermelhoFundo',
  title = '',
  children,
  onClick,
  style // Adicionei a propriedade style
}: Props) => (
  <ButtonContainer
    size={size}
    bcolor={bcolor}
    title={title}
    onClick={onClick}
    style={style}
  >
    {children}
  </ButtonContainer>
)

export default Button
