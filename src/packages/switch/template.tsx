import { SwitchProps } from './props'
import Root from './style'

export default function Switch({
    color,
    size,
    radius,
    disabled,
    ...rest
}: SwitchProps) {
    const rootRest = { color, size, radius, disabled }
    return (
        <Root {...rootRest}>
            <input type='checkbox' disabled={disabled} {...rest} />
            <div className='switch-point' />
            <div className='switch-background' />
        </Root>
    )
}
