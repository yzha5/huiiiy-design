import styled from '@emotion/styled'
import { SwitchStyleProps } from './props'
import { switchStatusColor } from '../helper'

export default styled.div<SwitchStyleProps>(
    ({ color, size, radius, disabled, theme }) => {
        const s = size ?? theme.size.switch
        const c = switchStatusColor(theme.palette, color)
        return {
            label: 'switch',
            position: 'relative',
            overflow: 'hidden',
            height: s,
            width: 1.8 * s,
            padding: 0.1 * s,
            borderRadius: radius ?? s / 2,
            '&>input': {
                position: 'absolute',
                width: 'inherit',
                height: 'inherit',
                cursor: disabled ? 'not-allowed' : 'pointer',
                top: 0,
                left: 0,
                padding: 0,
                margin: 0,
                opacity: 0,
                zIndex: 3,
                '&:checked': {
                    '&~.switch-point': {
                        transition: 'all .2s',
                        marginLeft: 0.8 * s,
                        background: 'white',
                    },
                    '&~.switch-background': {
                        transition: 'all .2s',
                        background: color ? c.main : theme.palette.primary.main,
                    },
                },
            },
            '&>.switch-point': {
                transition: 'all .2s',
                position: 'absolute',
                background: disabled
                    ? theme.palette.disabled.text
                    : color
                    ? c.main
                    : theme.palette.primary.main,
                height: 0.8 * s,
                width: 0.8 * s,
                marginLeft: 0,
                borderRadius: 0.4 * s,
                zIndex: 2,
            },
            '&>.switch-background': {
                transition: 'all .2s',
                position: 'absolute',
                width: 'inherit',
                height: 'inherit',
                zIndex: 1,
                top: 0,
                left: 0,
                background: disabled
                    ? theme.palette.disabled.background
                    : color
                    ? c.light
                    : theme.palette.primary.light,
            },
        }
    }
)
