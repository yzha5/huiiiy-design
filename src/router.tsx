import { createBrowserRouter } from 'react-router-dom'
import ButtonPage from './pages/button'
import ColorPage from './pages/color'
import GridPage from './pages/grid'
import ViewPage from './pages/view'
import BadgePage from './pages/badge'
import BackdropPage from './pages/backdrop'
import ListPage from './pages/list'
import InputPage from './pages/input'
import DialogPage from './pages/dialog'
import SelectPage from './pages/select'
import IconPage from './pages/icon'

export default createBrowserRouter([
    { path: '/', element: <div>index</div> },
    { path: 'color', element: <ColorPage /> },
    {
        path: 'component',
        children: [
            { path: 'button', element: <ButtonPage /> },
            { path: 'grid', element: <GridPage /> },
            { path: 'view', element: <ViewPage /> },
            { path: 'badge', element: <BadgePage /> },
            { path: 'backdrop', element: <BackdropPage /> },
            { path: 'list', element: <ListPage /> },
            { path: 'input', element: <InputPage /> },
            { path: 'dialog', element: <DialogPage /> },
            { path: 'select', element: <SelectPage /> },
            { path: 'icon', element: <IconPage /> },
        ],
    },
])
