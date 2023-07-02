import { LiHTMLAttributes } from 'react'
import { UIColor } from '../props'

export interface ListItemStyleProps {
    color?: UIColor
    light?: boolean
    disabled?: boolean
    size?: number
    canSelect?: boolean
}

export interface ListItemProps
    extends Omit<LiHTMLAttributes<HTMLLIElement>, 'color' | 'id'>,
        ListItemStyleProps {
    key: string | number
    text: string | number
    icon?: any
    endElement?: any
    selected?: boolean
}
