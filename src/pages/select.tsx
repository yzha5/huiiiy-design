import Container from '../packages/container/template'
import { Col, Row } from '../packages/grid'
import Select from '../packages/select/template'
import { ListItemProps } from '../packages/list-item/props'

const lis: ListItemProps[] = [
    { key: '1', text: '列表项1' },
    { key: '2', text: '列表项2' },
    { key: '3', text: '列表项3', color: '#ff7654' },
    { key: '4', text: '列表项4', color: 'error', light: true },
    { key: '5', text: '列表项5' },
    { key: '6', text: '列表项6' },
]
export default function SelectPage() {
    return (
        <Container>
            <Row>
                <Col width={5}>
                    <Select data={lis} />
                    <br />
                    <Select data={lis} multiple />
                </Col>
            </Row>
        </Container>
    )
}
