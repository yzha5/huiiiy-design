import { ButtonHTMLAttributes } from 'react'
import { UIColor } from '../props'

export interface ButtonStyleProps {
    variant?: 'fill' | 'outline' | 'link'
    color?: UIColor
    size?: number
    radius?: number
    block?: boolean
    icon?: boolean
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, ButtonStyleProps {}
