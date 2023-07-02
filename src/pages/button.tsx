import Button from '../packages/button/template'
import { UIColor } from '../packages/props'
import Setting from '../components/icon/setting'
import Container from '../packages/container/template'

const st: UIColor[] = ['primary', 'success', 'warn', 'error']
const va = ['fill', 'outline', 'link']
const di = [false, true]
const ic = [false, true]
export default function ButtonPage() {
    return (
        <Container>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,1fr)',
                    gap: '1.25rem',
                }}
            >
                {ic.map((isIcon, icIndex) =>
                    di.map((disabled, diIndex) =>
                        va.map((vari, vaIndex) =>
                            st.map((sta, stIndex) => (
                                <Button
                                    key={`${icIndex}${diIndex}${vaIndex}${stIndex}`}
                                    icon={isIcon}
                                    disabled={disabled}
                                    variant={vari as 'fill' | 'outline' | 'link'}
                                    color={sta}
                                >
                                    {isIcon ? <Setting /> : `${vari}-${sta}`}
                                </Button>
                            ))
                        )
                    )
                )}
            </div>
            <Button radius={12} size={56} color='#FF8765'>
                <Setting />
                #FF8765
            </Button>
            <Button variant='fill' block>
                Block button
            </Button>
            <Button variant='outline' block>
                Block button
            </Button>
            <Button variant='link' block>
                Block button
            </Button>
        </Container>
    )
}
