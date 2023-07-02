import { Global, ThemeProvider as Tp, useTheme as ut } from '@emotion/react'
import { ReactNode, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from './init'
import { Theme } from './props'
import { root } from './normalize'

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

interface ThemeProps {
    children?: ReactNode
    theme?: DeepPartial<Theme>
}

export function ThemeProvider({ children, theme }: ThemeProps) {
    const [t, setT] = useState<Theme>(lightTheme)
    useEffect(
        function () {
            if (theme && theme.palette) {
                if (theme.palette.mode == 'dark') {
                    setT(darkTheme)
                } else {
                    setT(lightTheme)
                }
            }
        },
        [theme]
    )
    return (
        <Tp theme={t}>
            <Global styles={root} />
            {children}
        </Tp>
    )
}

export function useTheme() {
    return ut()
}
