import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routesPage from './routes-list';

const router = createBrowserRouter(routesPage);

const MyAppRouter = () => (
    <RouterProvider router={router} />
)

export default MyAppRouter