import { ADMIN_ROUTES_NAME } from "../routes.names";
import { Home, Products, Sessions, Users } from '../../pages'

export default [
    {
        path: ADMIN_ROUTES_NAME.Home,
        element: <Home />
    },
    {
        path: ADMIN_ROUTES_NAME.Products,
        element: <Products />
    },
    {
        path: ADMIN_ROUTES_NAME.Sessions,
        element: <Sessions />
    },
    {
        path: ADMIN_ROUTES_NAME.Users,
        element: <Users />
    }
]