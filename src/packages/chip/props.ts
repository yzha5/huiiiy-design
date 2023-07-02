import { HTMLAttributes } from 'react'
import { UIColor } from '../props'

export interface ChipStyleProps {
    color?: UIColor
    size?: number
    radius?: number
    light?: boolean
}
export interface ChipProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'children'>,
        ChipStyleProps {
    children: string | number
    onClose?: () => void
}
