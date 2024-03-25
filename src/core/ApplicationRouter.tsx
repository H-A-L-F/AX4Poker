import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "../presentation/home/HomePage.js";
import LoginPage from "@/presentation/login/LoginPage.tsx";
import MainLayout from "@/presentation/layout/MainLayout.js";

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
        <MainLayout>
            <RouterProvider router={router} />
        </MainLayout>
    );
};