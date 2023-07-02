import styled from '@emotion/styled'
import { BadgeStyleProps } from './props'
import { lightTheme } from '../theme/init'
import { switchColor } from '../helper'

export default styled.div<BadgeStyleProps>(
    ({ color, light, size = 20, radius, theme = lightTheme }) => {
        const c = switchColor(theme.palette, color)
        return {
            label: 'badge',
            display: 'inline-flex',
            background: color
                ? light
                    ? c.transparentActive
                    : c.main
                : 'transparent',
            color: color
                ? light
                    ? c.textInTransparentActive
                    : c.textInMain
                : 'inherit',
            height: `${(18 * size) / theme.size.badge}px`,
            padding: `0 ${(theme.size.gap * size) / theme.size.badge / 2}px`,
            fontSize: `${(12 * size) / theme.size.badge}px`,
            borderRadius: radius,
        }
    }
)
