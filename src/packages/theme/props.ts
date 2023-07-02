import { PaletteMode } from '../props'

export interface Theme {
    palette: Palette
    breakpoints: Breakpoints
    size: {
        font: number
        gap: number
        button: number
        badge: number
        list: number
        input: number
        switch: number
        chip: number
    }
}

export interface Palette {
    primary: PaletteColor
    success: PaletteColor
    warn: PaletteColor
    error: PaletteColor
    view: string
    border: string
    label: string
    placeholder: string
    disabled: {
        background: string
        text: string
        border: string
    }
    mode: PaletteMode
}

export interface PaletteColor {
    main: string
    textInMain: string
    hover: string
    textInHover: string
    active: string
    light: string
    textInLight: string
    lightHover: string
    textInLightHover: string
    lightActive: string
    textInLightActive: string
    textInActive: string
    transparentHover: string
    textInTransparentHover: string
    transparentActive: string
    textInTransparentActive: string
}

export interface Breakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
}
