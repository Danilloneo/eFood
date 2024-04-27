import { ButtonContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  bcolor?: 'vermelhoFundo' | 'vermelhoTexto'
  children: string
}

const Button = ({
  size = 'small',
  bcolor = 'vermelhoFundo',
  children
}: Props) => (
  <ButtonContainer size={size} bcolor={bcolor}>
    {children}
  </ButtonContainer>
)

export default Button
