import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProvider } from './packages/theme/context'
import { useState } from 'react'

function App() {
    const [mode, set_mode] = useState<'light' | 'dark'>('light')
    return (
        <ThemeProvider theme={{ palette: { mode } }}>
            <button onClick={() => set_mode(mode == 'dark' ? 'light' : 'dark')}>toggle</button>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
