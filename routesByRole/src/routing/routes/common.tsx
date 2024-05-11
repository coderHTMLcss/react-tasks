import { COMMON_ROUTES_NAMES } from "../routes.names";
import { Home, Products } from "../../pages";

export default [
    {
        path: COMMON_ROUTES_NAMES.Home,
        element: <Home />
    },
    {
        path: COMMON_ROUTES_NAMES.Products,
        element: <Products />
    }
]