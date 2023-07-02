import { ListItemProps } from './props'
import Root from './style'

function SelectedIcon({ disabled }: { disabled?: boolean }) {
    return (
        <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect
                width='16'
                height='16'
                fill={disabled ? 'currentColor' : '#DC1646'}
            />
            <path d='M2.5 8L6 11.5L13.5 4' stroke='white' strokeWidth='3' />
        </svg>
    )
}

export default function ListItem({
    text,
    icon,
    endElement,
    selected,
    disabled,
    ...rest
}: ListItemProps) {
    return (
        <Root disabled={disabled} {...rest}>
            <div className='list-item-on-left'>
                {icon && <div className='list-item-icon'>{icon}</div>}
                <div className='list-item-text'>{text}</div>
            </div>
            {selected ? (
                <div className='list-item-on-right'>
                    <SelectedIcon disabled={disabled} />
                </div>
            ) : (
                endElement && (
                    <div className='list-item-on-right'>{endElement}</div>
                )
            )}
        </Root>
    )
}
