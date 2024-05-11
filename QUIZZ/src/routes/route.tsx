import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import ErrorPage from "../pages/errorPage";
import Quizz from "../pages/Quizz";
import CreateQuizz from "../pages/CreateQuizz";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/quizz",
        element: <Quizz />,
        errorElement: <ErrorPage />
    },
    {
        path: "/createQuizz",
        element: <CreateQuizz />,
        errorElement: <ErrorPage />
    },
]);