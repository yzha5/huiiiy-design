import styled from '@emotion/styled'
import { InputStyleProps } from './props'
import { switchStatusColor } from '../helper'

export default styled.input<InputStyleProps>(
    ({ color, size, radius = 0, disabled, theme }) => {
        const c = switchStatusColor(theme.palette, color)
        const s = size ?? theme.size.input
        return {
            label: 'input',
            outline: 'none',
            width: '100%',
            overflow: 'hidden',
            height: `${s}px`,
            fontSize: `${(14 * s) / theme.size.input}px`,
            fontFamily: 'inherit',
            cursor: disabled ? 'not-allowed' : 'auto',
            margin: 0,
            padding: `0 ${((theme.size.gap / 2) * s) / theme.size.input}px`,
            background: disabled
                ? theme.palette.disabled.background
                : 'transparent',
            color: disabled ? theme.palette.disabled.text : 'inherit',
            borderRadius: `${radius}px`,
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
            '&:focus:not(:disabled)': {
                boxShadow: `0 0 0 ${s / theme.size.input}px inset ${
                    color ? c.active : theme.palette.primary.active
                }`,
                borderColor: color ? c.active : theme.palette.primary.active,
            },
            '&[type=color]': {
                padding: 0,
            },
            '&[type=radio],&[type=checkbox]': {
                width: `${s / 2}px`,
                padding: `${theme.size.gap / 2}px`,
                boxShadow: 'none !important',
                color: 'red',
            },
            '&[type=range]': {
                padding: 0,
                boxShadow: 'none !important',
            },
        }
    }
)
