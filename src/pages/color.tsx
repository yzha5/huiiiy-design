import { useTheme } from '@emotion/react'
import { PaletteColor } from '../packages'

export default function ColorPage() {
    const theme = useTheme()
    const co: PaletteColor[] = [theme.palette.primary, theme.palette.success, theme.palette.warn, theme.palette.error]
    return (
        <div className='container'>
            <div className='grid'>
                {co.map((v, i) => {
                    return Object.keys(v).map((key, ki) => (
                        <div
                            className='g-col-3'
                            key={`${i}${key}${ki}`}
                            style={{ background: v[key as keyof PaletteColor] }}
                        >
                            {key}
                        </div>
                    ))
                })}
            </div>
        </div>
    )
}
