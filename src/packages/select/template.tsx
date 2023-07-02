import { SelectProps } from './props'
import Root from './style'
import List from '../list/template'
import { createRef, MouseEvent, useEffect, useState } from 'react'
import { ListItemProps } from '../list-item/props'
import { ListIcon } from '../common_component'
import Backdrop from '../backdrop/template'
import View from '../view/template'

export default function Select({
    data,
    selectedList,
    multiple,
    ...rest
}: SelectProps) {
    const sbRef = createRef<HTMLDivElement>()
    const liRef = createRef<HTMLDivElement>()
    const [sl, setSl] = useState<ListItemProps[]>([])
    const [d, setD] = useState<ListItemProps[]>([])
    const [show, setShow] = useState(false)
    const [cr, setCR] = useState<{
        top: number
        left: number
        width: number
        height: number
    }>({ top: 0, left: 0, width: 0, height: 0 })
    const handleSBClick = (_: MouseEvent<HTMLDivElement>) => {
        setShow(!show)
    }
    useEffect(() => {
        if (data) {
            setD(data)
        }
    }, [data])
    useEffect(() => {
        const sb = sbRef.current
        if (sb) {
            let liRect: DOMRect = new DOMRect()
            if (show) {
                liRect = liRef.current!.getBoundingClientRect()
            }
            const sbRects = sb.getBoundingClientRect()
            const dch = document.documentElement.clientHeight
            let newCR = { ...cr }
            //弹出层宽度=选择器宽度
            newCR.width = sbRects.width
            // 高度
            // 如果弹出层高度小于下面距离高度，把弹出层放在下面
            if (liRect.height < dch - sbRects.bottom) {
                newCR.top = sbRects.bottom
            } else if (liRect.height < sbRects.top) {
                newCR.top = sbRects.top - liRect.height
            } else {
                newCR.top = 0
            }
            // 如果弹出层高度大于文档高度
            newCR.left = sbRects.left
            setCR(newCR)
        }
    }, [sl])
    return (
        <Root isOpen={show} {...rest}>
            <div ref={sbRef} className='select-body' onClick={handleSBClick}>
                <div className='select-text'>
                    {sl.map((item, index) => (
                        <span key={index}>
                            {item.text}
                            {sl.length - 1 > index ? ',' : null}
                        </span>
                    ))}
                </div>
                <div className='select-icon'>
                    <ListIcon />
                </div>
            </div>
            {Backdrop({
                open: show,
                children: (
                    <div ref={liRef}>
                        <View>
                            <List
                                data={d}
                                rdata={(d) => setD(d)}
                                canSelect
                                selectedList={(l) => {
                                    setSl(l)
                                    selectedList && selectedList(l)
                                }}
                                multiple={multiple}
                            />
                        </View>
                    </div>
                ),
                onBlankClick: (_) => {
                    setShow(false)
                },
                onContainerClick: () => !multiple && setShow(false),
                blankBackground: 'none',
                containerRect: cr,
            })}
        </Root>
    )
}
