import Container from '../packages/container/template'
import Button from '../packages/button/template'
import { useEffect, useState } from 'react'
import Dialog from '../packages/dialog/template'

export default function DialogPage() {
    const [open, setOpen] = useState(false)
    useEffect(() => {}, [])
    return (
        <Container
            onClick={() => {
                console.log('container click')
            }}
        >
            <Button onClick={() => setOpen(!open)}>Open Backdrop</Button>
            <Dialog
                title='这是一个标题这是一个题这是一个标题'
                open={open}
                onBlankClick={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
                onContainerClick={() => {
                    console.log('children click')
                }}
                submitText='提交'
            >
                <div>
                    <p>1</p>
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
                    <p>3</p>
                </div>
            </Dialog>
        </Container>
    )
}
