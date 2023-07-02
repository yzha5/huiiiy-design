import { GlobalProps } from '@emotion/react'
import { darken, lighten } from '../../helper'

export const root: GlobalProps['styles'] = (theme) => ({
    '*,*::before,*::after': {
        boxSizing: 'border-box',
    },
    html: {
        backgroundColor: lighten(theme.palette.primary.main, theme.palette.mode, 0.95),
        color: darken(theme.palette.primary.main, theme.palette.mode, 0.9),
        fontFamily: `'Noto Sans CJK SC'`,
    },
    'html,body': {
        margin: 0,
    },
    body: {
        fontSize: 16,
    },
    '@media screen and (min-width:3840px)': {
        body: {
            fontSize: 24,
        },
    },
})
