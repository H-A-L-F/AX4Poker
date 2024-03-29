import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../presentation/home/HomePage.js";
import LoginPage from "@/presentation/auth/LoginPage.js";
import MainLayout from "@/presentation/layout/MainLayout.js";
import RegisterPage from "@/presentation/auth/RegisterPage.js";
import ProtectedRoute from "./ProtectedRoute.js";
import SessionPage from "@/presentation/session/SessionPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/session",
        element: <SessionPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export const ApplicationRouter = () => {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
};
