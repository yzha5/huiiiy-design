import '@emotion/react'
import { Theme as T } from './packages/theme'

declare module '@emotion/react' {
    export interface Theme extends T {}
}
