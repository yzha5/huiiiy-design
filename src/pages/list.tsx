import Container from '../packages/container/template'
import { Col, Row } from '../packages/grid'
import { UIColor } from '../packages/props'
import List from '../packages/list/template'
import View from '../packages/view/template'
import { ListItemProps } from '../packages/list-item/props'
import Setting from '../components/icon/setting'

const colors: UIColor[] = ['primary', 'success', 'warn', 'error', '#ff7654']

function genData(): ListItemProps[] {
    const arr: ListItemProps[] = []
    for (let i = 0; i < colors.length; i++) {
        arr.push({
            color: colors[i],
            text: colors[i],
            icon: <Setting />,
        } as ListItemProps)
        arr.push({
            color: colors[i],
            text: colors[i],
            light: true,
            icon: <Setting />,
        } as ListItemProps)
    }
    arr.push({ text: 'default', icon: <Setting /> } as ListItemProps)
    arr.push({
        text: 'default',
        selected: true,
        icon: <Setting />,
    } as ListItemProps)
    arr.push({
        text: 'default',
        disabled: true,
        icon: <Setting />,
    } as ListItemProps)
    return arr
}
export default function ListPage() {
    return (
        <Container>
            <View>
                <Row>
                    <Col>
                        <List
                            canSelect
                            multiple
                            selectedList={(l) => {
                                console.log(l)
                            }}
                            data={genData()}
                        />
                    </Col>
                </Row>
            </View>
        </Container>
    )
}
