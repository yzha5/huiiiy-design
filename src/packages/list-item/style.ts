import styled from '@emotion/styled'
import { ListItemStyleProps } from './props'
import { lightTheme } from '../theme/init'
import { gray, switchColor } from '../helper'

export default styled.li<ListItemStyleProps>(
    ({ color, light, disabled, size = 40, canSelect, theme = lightTheme }) => {
        const c = switchColor(theme.palette, color)
        return {
            label: 'list-item',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            userSelect: 'none',
            cursor: disabled ? 'not-allowed' : 'default',
            width: 'inherit',
            height: `${size ?? theme.size.list}px`,
            fontSize: `${(14 * size) / theme.size.list}px`,
            padding: `0 ${
                ((theme.size.gap / 2) * size) / theme.size.list
            }px 0 ${(theme.size.gap * size) / theme.size.list}px`,
            gap: `${theme.size.gap / 2}px`,
            background: disabled
                ? theme.palette.disabled.background
                : color
                ? light
                    ? c.light
                    : c.main
                : undefined,
            color: disabled
                ? theme.palette.disabled.text
                : color
                ? light
                    ? c.textInLight
                    : c.textInMain
                : 'inherit',
            '&>.list-item-on-left': {
                display: 'flex',
                fontSize: 'inherit',
                overflow: 'hidden',
                gap: 'inherit',
                width: '100%',
                '&>.list-item-text': {
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
            },
            '&:hover': !disabled &&
                canSelect && {
                    background: color
                        ? light
                            ? c.lightHover
                            : c.hover
                        : theme.palette.mode == 'dark'
                        ? gray(0.9)
                        : gray(0.1),
                    color: color
                        ? light
                            ? c.textInLightHover
                            : c.textInHover
                        : 'inherit',
                },
            '&:active': !disabled &&
                canSelect && {
                    background: color
                        ? light
                            ? c.lightActive
                            : c.active
                        : theme.palette.mode == 'dark'
                        ? gray(0.8)
                        : gray(0.2),
                    color: color
                        ? light
                            ? c.textInLightActive
                            : c.textInActive
                        : 'inherit',
                },
        }
    }
)
