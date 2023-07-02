import { BackdropProps } from '../backdrop/props'

export interface DialogStyleProps {
    radius?: number
}

export interface DialogProps extends BackdropProps, DialogStyleProps {
    title?: string
    onClose?: () => void
    submitText?: string
    onSubmitClick?: () => void
    cancelText?: string
    onCancelClick?: () => void
}
