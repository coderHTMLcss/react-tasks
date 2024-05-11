import { USER_ROUTES_NAME } from "../routes.names";
import { Home, Products, Product } from "../../pages";

export default [
    {
        path: USER_ROUTES_NAME.Home,
        element: <Home />
    },
    {
        path: USER_ROUTES_NAME.Products,
        element: <Products />
    },
    {
        path: USER_ROUTES_NAME.Product,
        element: <Product />
    }
]