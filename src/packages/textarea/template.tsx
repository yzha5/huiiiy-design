import { TextareaProps } from './props'
import Root from './style'

export default function Textarea({ ...rest }: TextareaProps) {
    return <Root {...rest} />
}
