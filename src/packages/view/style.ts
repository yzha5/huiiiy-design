import styled from '@emotion/styled'
import { ViewStyleProps } from './props'
import { lightTheme } from '../theme/init'

export default styled.div<ViewStyleProps>(({ radius, theme = lightTheme }) => {
    return {
        label: 'view',
        border: `solid 1px ${theme.palette.border}`,
        background: theme.palette.view,
        borderRadius: radius,
    }
})
