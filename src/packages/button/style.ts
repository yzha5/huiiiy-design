import styled from '@emotion/styled'
import { ButtonStyleProps } from './props'
import { lightTheme } from '../theme/init'
import { switchColor } from '../helper'

export default styled.button<ButtonStyleProps>(
    ({
        color = 'primary',
        variant = 'fill',
        radius,
        size = 40,
        icon,
        block,
        disabled,
        theme = lightTheme,
    }) => {
        const c = switchColor(theme.palette, color)
        return {
            label: 'button',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            userSelect: 'none',
            gap: theme.size.gap / 2,
            borderRadius: radius,
            border:
                variant == 'outline'
                    ? disabled
                        ? `solid ${size / theme.size.button}px ${
                              theme.palette.disabled.border
                          }`
                        : `solid ${size / theme.size.button}px ${c.main}`
                    : 'none',
            outline: 'none',
            height: size ?? theme.size.button,
            width: icon ? size : block ? '100%' : 'auto',
            fontSize: `${(14 * size) / theme.size.button}px`,
            fontWeight: 500,
            fontFamily: 'inherit',
            cursor: disabled ? 'not-allowed' : 'pointer',
            padding: icon
                ? 0
                : `0 ${(size * theme.size.gap) / theme.size.button}px`,
            background:
                variant == 'fill'
                    ? disabled
                        ? theme.palette.disabled.background
                        : c.main
                    : 'transparent',
            color:
                variant == 'fill'
                    ? disabled
                        ? theme.palette.disabled.text
                        : c.textInMain
                    : disabled
                    ? theme.palette.disabled.text
                    : 'inherit',
            '&:hover:not(:disabled)': {
                background: variant == 'fill' ? c.hover : c.transparentHover,
                color: variant == 'fill' ? c.textInHover : 'inherit',
            },
            '&:active:not(:disabled)': {
                background: variant == 'fill' ? c.active : c.transparentActive,
                color: variant == 'fill' ? c.textInActive : 'inherit',
            },
        }
    }
)
