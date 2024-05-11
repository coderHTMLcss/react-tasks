import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesList from './routes-list'


const router = createBrowserRouter(routesList)

const MyAppRouter = () => (
    <RouterProvider router={router} />
)

export default MyAppRouter