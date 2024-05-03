export type Props = {
  size?: 'small' | 'big'
  children?: string
}
import { TagContainer } from './styles'

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
