import { ListItemProps } from '../list-item/props'
import { HTMLAttributes } from 'react'
import { UIColor } from '../props'

export interface SelectStyleProps {
    color?: UIColor
    size?: number
    radius?: number
    disabled?: boolean
    isOpen?: boolean
}
export interface SelectProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
        Omit<SelectStyleProps, 'isOpen'> {
    data: ListItemProps[]
    multiple?: boolean
    selectedList?: (list: ListItemProps[]) => void
}
