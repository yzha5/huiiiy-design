import styled from '@emotion/styled'
import { DialogStyleProps } from './props'
import { gray } from '../helper'

export default styled.div<DialogStyleProps>(({ radius, theme }) => {
    const gap = theme.size.gap
    return {
        label: 'dialog',
        background: theme.palette.view,
        border: `solid 1px ${theme.palette.border}`,
        maxWidth: '99%',
        maxHeight: '99vh',
        borderRadius: radius,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '&>.dialog-header': {
            padding: gap / 2,
            display: 'flex',
            justifyContent: 'center',

            '&>.dialog-title': {
                width: '100%',
                fontWeight: 500,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            '&>.dialog-close': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: `0 ${gap / 3}px`,
                '&:hover': {
                    background: gray(0.1),
                },
                '&:active': {
                    background: gray(0.2),
                },
            },
        },
        '&>.dialog-content': {
            padding: gap,
            overflow: 'auto',
            height: '100%',
        },
        '&>.dialog-footer': {
            display: 'flex',
            justifyContent: 'end',
        },
    }
})
