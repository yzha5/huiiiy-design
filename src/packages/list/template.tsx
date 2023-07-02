import { MouseEvent, useEffect, useState } from 'react'
import { ListProps } from './props'
import Root from './style'
import ListItem from '../list-item/template'
import { ListItemProps } from '../list-item/props'

export default function List({
    data,
    rdata,
    onItemClick,
    canSelect,
    multiple,
    selectedList,
    ...rest
}: ListProps) {
    const [d, setD] = useState<ListItemProps[]>([])
    useEffect(() => {
        if (data) {
            setD(data)
            selectedList && selectedList(loopDataForSelected(data))
        }
    }, [])
    const handleItemClick = (
        e: MouseEvent<HTMLLIElement>,
        item: ListItemProps,
        index: number
    ) => {
        if (canSelect) {
            const newItem = { ...item, selected: !item.selected }
            const newD = [...d]
            if (multiple) {
                newD.splice(index, 1, newItem)
                setD(newD)
                // 为了提高性能，只有调用了selectedList函数才进行遍历生成数据
                selectedList && selectedList(loopDataForSelected(newD))
            } else {
                // 改变原数据，清除所有选中
                for (let i = 0; i < newD.length; i++) {
                    if (newD[i].selected) {
                        newD[i].selected = false
                    }
                }
                newD.splice(index, 1, newItem)
                setD(newD)

                selectedList && selectedList([item])
            }
            rdata && rdata(newD)
        }

        onItemClick && onItemClick(e, item)
    }
    return (
        <Root {...rest}>
            {d.map((item, index) => {
                const { canSelect: _, onClick, ...itemRest } = item
                return (
                    <ListItem
                        canSelect={canSelect}
                        onClick={(e) => handleItemClick(e, item, index)}
                        {...itemRest}
                    />
                )
            })}
        </Root>
    )
}

function loopDataForSelected(data: ListItemProps[]): ListItemProps[] {
    const sd: ListItemProps[] = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].selected) {
            sd.push(data[i])
        }
    }
    return sd
}
