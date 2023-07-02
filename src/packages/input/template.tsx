import { InputProps } from './props'
import Root from './style'

export default function Input({ ...rest }: InputProps) {
    return <Root {...rest} />
}
