import { title } from 'process'
import { ButtonContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  bcolor?: 'vermelhoFundo' | 'vermelhoTexto'
  title?: string
  children: string
}

const Button = ({
  size = 'small',
  bcolor = 'vermelhoFundo',
  title = '',
  children
}: Props) => (
  <ButtonContainer size={size} bcolor={bcolor} title={title}>
    {children}
  </ButtonContainer>
)

export default Button
