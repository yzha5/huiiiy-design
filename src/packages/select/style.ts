import styled from '@emotion/styled'
import { SelectStyleProps } from './props'
import { lightTheme } from '../theme/init'
import { switchStatusColor } from '../helper'

export default styled.div<SelectStyleProps>(
    ({ color, size, radius, disabled, isOpen, theme = lightTheme }) => {
        const c = switchStatusColor(theme.palette, color)
        const s = size ?? theme.size.input
        const gap = theme.size.gap
        return {
            label: 'select',
            width: '100%',
            '&>.select-body': {
                display: 'flex',
                alignItems: 'center',
                width: 'inherit',
                height: 40,
                padding: `0 ${((gap / 2) * s) / theme.size.input}px`,
                fontSize: 14,
                gap: gap,

                background: disabled
                    ? theme.palette.disabled.background
                    : 'transparent',
                color: disabled ? theme.palette.disabled.text : 'inherit',
                borderRadius: radius,
                border: `solid ${s / theme.size.input}px ${
                    disabled
                        ? theme.palette.disabled.border
                        : color
                        ? c.main
                        : theme.palette.border
                }`,
                '&:hover:not(:disabled)': {
                    borderColor: color ? c.hover : theme.palette.primary.hover,
                },
                '&': isOpen && {
                    boxShadow: `0 0 0 ${s / theme.size.input}px inset ${
                        color ? c.active : theme.palette.primary.active
                    }`,
                    borderColor: color
                        ? c.active
                        : theme.palette.primary.active,
                },
                '&>.select-text': {
                    display: 'flex',
                    width: 'inherit',
                    gap: gap / 4,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                },
            },
        }
    }
)
