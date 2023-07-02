import Color from 'color'
import { Palette, PaletteColor } from './theme'
import { PaletteMode, UIColor, UIStatusColor } from './props'

export function generatePaletteColor(
    color: string,
    mode: PaletteMode
): PaletteColor {
    const black = Color('black')
    const white = Color('white')
    const c = Color(color)
    const mixColor = mode == 'dark' ? white : black
    const hoverObj = c.mix(mixColor, 0.1)
    const activeObj = c.mix(mixColor, 0.2)
    const lightObj = c.mix(mode == 'dark' ? black : white, 0.7)
    const lightHoverObj = c.mix(mode == 'dark' ? black : white, 0.8)
    const lightActiveObj = c.mix(mode == 'dark' ? black : white, 0.9)
    const transparentHoverObj = c.fade(0.9)
    const transparentActiveObj = c.fade(0.8)
    const darkWhite = (co: Color): string => {
        return co.isDark() ? 'white' : 'black'
    }
    return {
        main: color,
        hover: hoverObj.toString(),
        active: activeObj.toString(),
        textInMain: darkWhite(c),
        textInHover: darkWhite(hoverObj),
        textInActive: darkWhite(hoverObj),
        light: lightObj.toString(),
        lightHover: lightHoverObj.toString(),
        lightActive: lightActiveObj.toString(),
        textInLight: darkWhite(lightObj),
        textInLightHover: darkWhite(lightHoverObj),
        textInLightActive: darkWhite(lightActiveObj),
        transparentHover: transparentHoverObj.toString(),
        transparentActive: transparentActiveObj.toString(),
        textInTransparentHover: 'inherit',
        textInTransparentActive: 'inherit',
    }
}

export function gray(weight: number): string {
    return Color('white').mix(Color('black'), weight).toString()
}

export function lighten(
    color: string,
    mode: PaletteMode,
    weight: number
): string {
    return Color(color)
        .mix(Color(mode == 'dark' ? 'black' : 'white'), weight)
        .toString()
}

export function darken(
    color: string,
    mode: PaletteMode,
    weight: number
): string {
    return Color(color)
        .mix(Color(mode == 'dark' ? 'white' : 'black'), weight)
        .toString()
}

export function switchColor(palette: Palette, color?: UIColor): PaletteColor {
    const c = color ? color : palette.mode == 'dark' ? gray(0.9) : gray(0.1)
    switch (c) {
        case 'primary':
            return palette.primary
        case 'success':
            return palette.success
        case 'warn':
            return palette.warn
        case 'error':
            return palette.error
        default:
            return generatePaletteColor(c, palette.mode)
    }
}

export function switchStatusColor(
    palette: Palette,
    color?: UIStatusColor
): PaletteColor {
    const c = color ? color : palette.mode == 'dark' ? gray(0.9) : gray(0.1)
    switch (c) {
        case 'success':
            return palette.success
        case 'warn':
            return palette.warn
        case 'error':
            return palette.error
        default:
            return generatePaletteColor(c, palette.mode)
    }
}
