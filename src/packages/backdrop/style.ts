import styled from '@emotion/styled'
import { BackdropStyleProps } from './props'

export default styled.div<BackdropStyleProps>(
    ({ blankBackground, blankBlur, containerRect: cr }) => {
        return {
            label: 'backdrop',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            background: blankBackground ?? 'rgba(0,0,0,.2)',
            backdropFilter: blankBlur ? `blur(${blankBlur}px)` : undefined,
            zIndex: 99999,
            display: cr ? undefined : 'flex',
            justifyContent: cr ? undefined : 'center',
            alignItems: cr ? undefined : 'center',
            '&>.backdrop-container': {
                position: 'fixed',
                maxWidth: '100%',
                maxHeight: '100%',
                overflow: 'auto',
                top: cr && cr.top ? `${cr.top}px` : undefined,
                left: cr && cr.left ? `${cr.left}px` : undefined,
                width: cr && cr.width ? `${cr.width}px` : undefined,
                height: cr && cr.height ? `${cr.height}px` : undefined,
            },
        }
    }
)
