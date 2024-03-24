import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "../presentation/home/HomePage.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};