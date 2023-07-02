import { HTMLAttributes, MouseEvent } from 'react'

export interface BackdropStyleProps {
    blankBackground?: string
    blankBlur?: number
    containerRect?: {
        top?: number
        left?: number
        width?: number
        height?: number
    }
}

export interface BackdropProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
        BackdropStyleProps {
    open: boolean
    onBlankClick?: (e: MouseEvent<HTMLDivElement>) => void
    onContainerClick?: (e: MouseEvent<HTMLDivElement>) => void
}
