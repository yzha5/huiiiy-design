import { HTMLAttributes } from 'react'

type GridWidth = 'auto' | number

export interface RowStyleProps {
    columns?: GridWidth //配置每行显示几个子元素
    smColumns?: GridWidth //配置每行显示几个子元素
    mdColumns?: GridWidth //配置每行显示几个子元素
    lgColumns?: GridWidth //配置每行显示几个子元素
    xlColumns?: GridWidth //配置每行显示几个子元素
    x2lColumns?: GridWidth //配置每行显示几个子元素
    x3lColumns?: GridWidth //配置每行显示几个子元素
}

export interface RowProps extends RowStyleProps, HTMLAttributes<HTMLDivElement> {}

export interface ColStyleProps {
    columnsInRow?: number //在行中的列数，默认为12
    width?: number
    xsWidth?: number
    smWidth?: number
    mdWidth?: number
    lgWidth?: number
    xlWidth?: number
    x2lWidth?: number
    x3lWidth?: number
}

export interface ColProps extends ColStyleProps, Omit<HTMLAttributes<HTMLDivElement>, 'width'> {}
