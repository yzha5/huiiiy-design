import { Breakpoints, Palette, Theme } from './props'
import { generatePaletteColor, gray } from '../helper'

export const breakpoints: Breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    x2l: 1400,
    x3l: 1920,
}
// #007bff
// #28a745
// #ffc107
// #dc3545
const lightPalette: Palette = {
    primary: generatePaletteColor('#007bff', 'light'),
    success: generatePaletteColor('#28a745', 'light'),
    warn: generatePaletteColor('#ffc107', 'light'),
    error: generatePaletteColor('#dc3545', 'light'),
    view: gray(0),
    border: gray(0.2),
    label: gray(0.6),
    disabled: { background: gray(0.05), border: gray(0.2), text: gray(0.3) },
    placeholder: gray(0.4),
    mode: 'light',
}
const darkPalette: Palette = {
    primary: generatePaletteColor('#66b0ff', 'dark'),
    success: generatePaletteColor('#6dd785', 'dark'),
    warn: generatePaletteColor('#ffda76', 'dark'),
    error: generatePaletteColor('#ff7684', 'dark'),
    view: gray(0.85),
    border: gray(0.8),
    label: gray(0.4),
    disabled: { background: gray(0.95), border: gray(0.8), text: gray(0.7) },
    placeholder: gray(0.6),
    mode: 'dark',
}

const defaultSize = {
    font: 16,
    gap: 20,
    button: 40,
    badge: 20,
    list: 40,
    input: 40,
    switch: 20,
    chip: 24,
}
export const lightTheme: Theme = {
    breakpoints: breakpoints,
    palette: lightPalette,
    size: defaultSize,
}
export const darkTheme: Theme = {
    breakpoints: breakpoints,
    palette: darkPalette,
    size: defaultSize,
}
