import { HtmlHTMLAttributes, MouseEvent } from 'react'
import { ListItemProps } from '../list-item/props'

export interface ListStyleProps {}

export interface ListProps
    extends Omit<HtmlHTMLAttributes<HTMLUListElement>, 'color' | 'children'>,
        ListStyleProps {
    data: ListItemProps[]
    rdata?: (d: ListItemProps[]) => void
    onItemClick?: (e: MouseEvent<HTMLLIElement>, item: ListItemProps) => void
    canSelect?: boolean
    multiple?: boolean
    selectedList?: (list: ListItemProps[]) => void
}
