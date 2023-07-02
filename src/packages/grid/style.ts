import styled from '@emotion/styled'
import { ColStyleProps, RowStyleProps } from './props'
import { lightTheme } from '../theme/init'
import { CSSProperties } from 'react'

export const RowRoot = styled.div<RowStyleProps>(
    ({ columns, smColumns, mdColumns, lgColumns, xlColumns, x2lColumns, x3lColumns, theme }) => {
        const t = theme ?? lightTheme
        return {
            label: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 0,
            marginRight: -0.5 * t.size.gap,
            marginLeft: -0.5 * t.size.gap,
            '&>*': {
                boxSizing: 'border-box',
                flexShrink: 0,
                maxWidth: '100%',
                paddingRight: 0.5 * t.size.gap,
                paddingLeft: 0.5 * t.size.gap,
                marginTop: 0,
                flex: columns ? '0 0 auto' : undefined,
                width: columns ? (columns == 'auto' ? 'auto' : `${100 / columns}%`) : '100%',

                [`@media (min-width:${t.breakpoints.sm}px)`]: smColumns && {
                    ...setChildAttr(smColumns),
                },
                [`@media (min-width:${t.breakpoints.md}px)`]: mdColumns && {
                    ...setChildAttr(mdColumns),
                },
                [`@media (min-width:${t.breakpoints.lg}px)`]: lgColumns && {
                    ...setChildAttr(lgColumns),
                },
                [`@media (min-width:${t.breakpoints.xl}px)`]: xlColumns && {
                    ...setChildAttr(xlColumns),
                },
                [`@media (min-width:${t.breakpoints.x2l}px)`]: x2lColumns && {
                    ...setChildAttr(x2lColumns),
                },
                [`@media (min-width:${t.breakpoints.x3l}px)`]: x3lColumns && {
                    ...setChildAttr(x3lColumns),
                },
            },
        }
    }
)

function setChildAttr(columns?: 'auto' | number): CSSProperties {
    return {
        flex: '0 0 auto',
        width: !columns || columns == 'auto' ? 'auto' : `${100 / columns}%`,
    }
}

export const ColRoot = styled.div<ColStyleProps>(
    ({ columnsInRow, xsWidth, smWidth, mdWidth, lgWidth, xlWidth, x2lWidth, x3lWidth, width, theme }) => {
        const { breakpoints } = theme ?? lightTheme
        const columns = columnsInRow ?? 12
        const allSet = xsWidth || smWidth || mdWidth || lgWidth || xlWidth || x2lWidth || x3lWidth
        return {
            label: 'column',
            flex: width ? '0 0 auto' : !allSet ? '1 0 0' : undefined,
            width: width ? `${(100 * width) / columns}%` : undefined,
            [`@media (min-width: ${breakpoints.xs}px)`]: xsWidth && {
                ...setColWidth(columns, xsWidth),
            },
            [`@media (min-width: ${breakpoints.sm}px)`]: smWidth && {
                ...setColWidth(columns, smWidth),
            },
            [`@media (min-width: ${breakpoints.md}px)`]: mdWidth && {
                ...setColWidth(columns, mdWidth),
            },
            [`@media (min-width: ${breakpoints.lg}px)`]: lgWidth && {
                ...setColWidth(columns, lgWidth),
            },
            [`@media (min-width: ${breakpoints.xl}px)`]: xlWidth && {
                ...setColWidth(columns, xlWidth),
            },
            [`@media (min-width: ${breakpoints.x2l}px)`]: x2lWidth && {
                ...setColWidth(columns, x2lWidth),
            },
            [`@media (min-width: ${breakpoints.x3l}px)`]: x3lWidth && {
                ...setColWidth(columns, x3lWidth),
            },
        }
    }
)

function setColWidth(columns: number, width?: number): CSSProperties {
    return {
        flex: width ? '0 0 auto' : undefined,
        width: width ? `${(100 * width) / columns}%` : '100%',
    }
}
