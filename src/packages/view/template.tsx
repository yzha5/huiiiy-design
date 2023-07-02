import { ViewProps } from './props'
import Root from './style'

export default function View({ children, ...rest }: ViewProps) {
    return <Root {...rest}>{children}</Root>
}
