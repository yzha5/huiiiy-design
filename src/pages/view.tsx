import Container from '../packages/container/template'
import { Col, Row } from '../packages/grid'
import View from '../packages/view/template'

export default function ViewPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <View>view</View>
                </Col>
                <Col>
                    <View>view</View>
                </Col>
                <Col>
                    <View>view</View>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <View>view</View>
                </Col>
                <Col>
                    <View>view</View>
                </Col>
                <Col>
                    <View>view</View>
                </Col>
            </Row>
        </Container>
    )
}
