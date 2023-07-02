import Container from '../packages/container/template'
import Button from '../packages/button/template'
import { useEffect, useState } from 'react'
import Backdrop from '../packages/backdrop/template'

export default function BackdropPage() {
    const [open, setOpen] = useState(false)
    useEffect(() => {}, [])
    return (
        <Container
            onClick={() => {
                console.log('container click')
            }}
        >
            <Button onClick={() => setOpen(!open)}>Open Backdrop</Button>
            {Backdrop({
                open,
                blankBlur: 24,
                children: (
                    <div style={{ background: 'green', padding: '32px', width: '100%', height: '100%' }}>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                    </div>
                ),
                onBlankClick: () => {
                    setOpen(!open)
                },
                onContainerClick: () => {
                    console.log('children click')
                },
                containerRect: {
                    top: 55,
                    left: 66,
                    width: 122,
                    height: 222,
                },
            })}
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </Container>
    )
}
