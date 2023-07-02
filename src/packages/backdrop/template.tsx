import { BackdropProps } from './props'
import Root from './style'
import { createPortal } from 'react-dom'

export default function Backdrop({ open, onBlankClick, onContainerClick, children, ...rest }: BackdropProps) {
    if (open) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
    const root = (
        <Root
            onClick={(e) => {
                e.stopPropagation() //阻止向父级DOM传递click事件
                onBlankClick && onBlankClick(e)
            }}
            {...rest}
        >
            <div
                className='backdrop-container'
                onClick={(e) => {
                    e.stopPropagation() //阻止向父级DOM传递click事件
                    onContainerClick && onContainerClick(e)
                }}
            >
                {children}
            </div>
        </Root>
    )
    return open ? createPortal(root, document.body) : null
}
