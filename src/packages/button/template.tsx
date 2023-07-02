import { ButtonProps } from './props'
import ButtonRoot from './style'

export default function Button({ children, ...rest }: ButtonProps) {
    return <ButtonRoot {...rest}>{children}</ButtonRoot>
}
