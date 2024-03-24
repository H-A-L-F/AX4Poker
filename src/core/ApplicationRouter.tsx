import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "../presentation/home/HomePage.js";
import LoginPage from "@/presentation/login/LoginPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};