import Container from '../packages/container/template'
import Badge from '../packages/badge/template'
import Chip from '../packages/chip/template'
import View from '../packages/view/template'

export default function BadgePage() {
    return (
        <Container>
            <View>
                <Badge size={24} color='primary' radius={6}>
                    badge
                </Badge>
                <Badge>badge</Badge>
                <Badge color='primary'>primary</Badge>
                <Badge color='success'>success</Badge>
                <Badge color='warn'>warn</Badge>
                <Badge color='error'>error</Badge>
                <Badge light>badge</Badge>
                <Badge light color='primary'>
                    primary
                </Badge>
                <Badge light color='success'>
                    success
                </Badge>
                <Badge light color='warn'>
                    warn
                </Badge>
                <Badge light color='error'>
                    error
                </Badge>
                <Chip>abc</Chip>
                <Chip color='primary'>abc</Chip>
                <Chip color='success'>abc</Chip>
                <Chip color='warn'>abc</Chip>
                <Chip color='error'>abc</Chip>
                <Chip color='#ff7654'>abc</Chip>
                <Chip light>abc</Chip>
                <Chip light color='primary'>
                    abc
                </Chip>
                <Chip light color='success'>
                    abc
                </Chip>
                <Chip light color='warn'>
                    abc
                </Chip>
                <Chip light color='error'>
                    abc
                </Chip>
                <Chip light color='#ff7654'>
                    abc
                </Chip>
            </View>
        </Container>
    )
}
