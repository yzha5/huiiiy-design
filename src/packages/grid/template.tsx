import { ColProps, RowProps } from './props'
import { ColRoot, RowRoot } from './style'

export function Row({ children, ...rest }: RowProps) {
    return <RowRoot {...rest}>{children}</RowRoot>
}

export function Col({ children, ...rest }: ColProps) {
    return <ColRoot {...rest}>{children}</ColRoot>
}
