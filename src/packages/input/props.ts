import { InputHTMLAttributes } from 'react'
import { UIStatusColor } from '../props'

export interface InputStyleProps {
    color?: UIStatusColor
    size?: number
    radius?: number
    disabled?: boolean
}

export interface InputProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            'color' | 'size' | 'disabled'
        >,
        InputStyleProps {}
