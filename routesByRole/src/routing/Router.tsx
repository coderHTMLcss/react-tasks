import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

import adminRoutes from './routes/admin'
import userRoutes from './routes/user'
import guestRoutes from './routes/guest'
import commonRoutes from './routes/common'
import { ROLES } from '../types/roles'
import { COMMON_ROUTES_NAMES } from './routes.names'



const routesToRolesMap = {
    [ROLES.ADMIN]: [...commonRoutes, ...adminRoutes],
    [ROLES.USER]: [...commonRoutes, ...userRoutes],
    [ROLES.GUEST]: [...commonRoutes, ...guestRoutes],

}

const Router: FC = () => {
    const auth = { role: 'admin' }
    const router = createBrowserRouter([
        {
            path: COMMON_ROUTES_NAMES.Home,
            element: <Layout />,
            children: routesToRolesMap[auth.role as ROLES],
        }
    ])

    return <RouterProvider router={router} />
}

export default Router