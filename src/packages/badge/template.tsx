import { BadgeProps } from './props'
import Root from './style'

export default function Badge({ children, ...rest }: BadgeProps) {
    return <Root {...rest}>{children}</Root>
}
