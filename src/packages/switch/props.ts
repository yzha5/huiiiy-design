import { InputHTMLAttributes } from 'react'
import { UIStatusColor } from '../props'

export interface SwitchStyleProps {
    color?: UIStatusColor
    size?: number
    radius?: number
    disabled?: boolean
}

export interface SwitchProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            'color' | 'type' | 'disabled'
        >,
        SwitchStyleProps {}
