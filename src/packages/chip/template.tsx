import { ChipProps } from './props'
import Root from './style'
import { CloseIcon } from '../common_component'
import Button from '../button/template'

export default function Chip({ size, onClose, children, ...rest }: ChipProps) {
    return (
        <Root size={size} {...rest}>
            <div className='chip-content'>{children}</div>
            <Button
                icon
                size={size ?? 20}
                radius={size ?? 20 / 2}
                variant='link'
                color='gray'
                className='chip-close'
                onClick={() => {
                    onClose && onClose()
                }}
            >
                <CloseIcon />
            </Button>
        </Root>
    )
}
