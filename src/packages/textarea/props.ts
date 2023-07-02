import { TextareaHTMLAttributes } from 'react'
import { UIStatusColor } from '../props'

export interface TextareaStyleProps {
    color?: UIStatusColor
    size?: number
    radius?: number
    disabled?: boolean
}

export interface TextareaProps
    extends Omit<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            'color' | 'size' | 'disabled'
        >,
        TextareaStyleProps {}
