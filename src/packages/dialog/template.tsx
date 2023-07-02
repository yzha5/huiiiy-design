import { DialogProps } from './props'
import Root from './style'
import Backdrop from '../backdrop/template'
import Button from '../button/template'
import { CloseIcon } from '../common_component'

export default function Dialog({
    title,
    onClose,
    children,
    submitText,
    onSubmitClick,
    cancelText,
    onCancelClick,
    radius,
    ...rest
}: DialogProps) {
    const childNode = (
        <Root radius={radius}>
            <div className='dialog-header'>
                <div className='dialog-title'>{title}</div>
                <div
                    className='dialog-close'
                    onClick={() => {
                        onClose && onClose()
                    }}
                >
                    <CloseIcon size='0.6em' />
                </div>
            </div>
            <div className='dialog-content'>{children}</div>
            <div className='dialog-footer'>
                {submitText && (
                    <Button
                        onClick={() => {
                            onSubmitClick && onSubmitClick()
                        }}
                    >
                        {submitText}
                    </Button>
                )}
                {cancelText && (
                    <Button
                        onClick={() => {
                            onCancelClick && onCancelClick()
                        }}
                        variant='link'
                        color='error'
                    >
                        {cancelText}
                    </Button>
                )}
            </div>
        </Root>
    )
    return <>{Backdrop({ children: childNode, ...rest })}</>
}
