import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Cart from "../pages/Cart"
import Product from "../pages/Product"
import PathConstants from "./pathConstans"


export default [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: PathConstants.CATALOG,
                element: <Catalog />
            },
            {
                path: PathConstants.PRODUCT,
                element: <Product />
            },
            {
                path: PathConstants.CART,
                element: <Cart />
            }
        ]
    }
]