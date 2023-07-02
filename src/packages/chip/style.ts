import styled from '@emotion/styled'
import { ChipStyleProps } from './props'
import { lightTheme } from '../theme/init'
import { switchColor } from '../helper'

export default styled.div<ChipStyleProps>(
    ({ color, size, light, radius, theme = lightTheme }) => {
        const c = switchColor(theme.palette, color)
        const s = size ?? theme.size.chip
        return {
            label: 'chip',
            display: 'inline-flex',
            alignItems: 'center',
            gap: theme.size.gap / 2,
            background: light ? c.light : c.main,
            color: light ? c.textInLight : c.textInMain,
            fontSize: `${(14 * s) / theme.size.chip}px`,
            borderRadius: radius ?? s / 2,
            height: s,
            paddingLeft: theme.size.gap / 2,
        }
    }
)
