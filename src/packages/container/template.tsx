import { ContainerProps } from './props'
import Root from './style'

export default function Container({ children, ...rest }: ContainerProps) {
    return <Root {...rest}>{children}</Root>
}
