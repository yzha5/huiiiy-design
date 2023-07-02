import Container from '../packages/container/template'
import Input from '../packages/input/template'
import { Col, Row } from '../packages/grid'
import Textarea from '../packages/textarea/template'
import Switch from '../packages/switch/template'

export default function InputPage() {
    return (
        <Container>
            <Row>
                <Col width={4}>
                    <Input />
                </Col>
                <Col width={4}>
                    <Input color='success' />
                </Col>
                <Col width={4}>
                    <Input color='warn' />
                </Col>
                <Col width={4}>
                    <Input color='error' type='file' />
                </Col>
                <Col width={4}>
                    <Input color='#ff7654' type='number' />
                </Col>
                <Col width={4}>
                    <Input
                        color='#ff7654'
                        type='number'
                        size={80}
                        radius={22}
                    />
                </Col>
                <Col width={4}>
                    <Input color='#ff7654' type='color' />
                </Col>
                <Col width={4}>
                    <Input color='#ff7654' type='radio' />
                    <Input color='#ff7654' type='checkbox' />
                </Col>
                <Col width={4}>
                    <Input color='#ff7654' type='range' />
                </Col>
                <Col width={4}>
                    <Input color='#ff7654' type='range' disabled />
                </Col>
                <Col width={4}>
                    <Input color='#ff7654' type='text' disabled />
                </Col>
                <Col>
                    <Textarea />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Switch />
                    <Switch color='success' />
                    <Switch color='warn' />
                    <Switch color='error' />
                    <Switch color='#ff7654' />
                    <Switch color='#ff7654' disabled />
                </Col>
            </Row>
        </Container>
    )
}
