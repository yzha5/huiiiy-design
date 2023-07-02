import styled from '@emotion/styled'
import { ContainerStyleProps } from './props'
import { lightTheme } from '../theme/init'

const baseDense = 36
export default styled.div<ContainerStyleProps>(({ theme }) => {
    const t = theme ?? lightTheme
    const bp = t.breakpoints
    return {
        label: 'container',
        width: '100%',
        paddingRight: t.size.gap,
        paddingLeft: t.size.gap,
        marginRight: 'auto',
        marginLeft: 'auto',
        [`@media (min-width: ${bp.sm}px)`]: { maxWidth: `${bp.sm - baseDense}px` },
        [`@media (min-width: ${bp.md}px)`]: { maxWidth: `${bp.md - baseDense * 1.5}px` },
        [`@media (min-width: ${bp.lg}px)`]: { maxWidth: `${bp.lg - baseDense * 2}px` },
        [`@media (min-width: ${bp.xl}px)`]: { maxWidth: `${bp.xl - baseDense * 2.5}px` },
        [`@media (min-width: ${bp.x2l}px)`]: { maxWidth: `${bp.x2l - baseDense * 3}px` },
        [`@media (min-width: ${bp.x3l}px)`]: { maxWidth: `${bp.x3l - baseDense * 3.5}px` },
    }
})
