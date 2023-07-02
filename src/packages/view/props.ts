import { HTMLAttributes } from 'react'

export interface ViewStyleProps {
    radius?: number
}

export interface ViewProps
    extends HTMLAttributes<HTMLDivElement>,
        ViewStyleProps {}
