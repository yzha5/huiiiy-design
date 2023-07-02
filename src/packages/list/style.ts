import styled from '@emotion/styled'
import { ListStyleProps } from './props'

export default styled.ul<ListStyleProps>(() => {
    return {
        label: 'list',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        width: 'inherit',
    }
})
