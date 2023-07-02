import { HTMLAttributes } from 'react'
import { UIColor } from '../props'

export interface BadgeStyleProps {
    color?: UIColor
    light?: boolean
    size?: number
    radius?: number
}

export interface BadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BadgeStyleProps {}
