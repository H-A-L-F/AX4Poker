import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../presentation/home/HomePage.js";
import LoginPage from "@/presentation/auth/LoginPage.js";
import MainLayout from "@/presentation/layout/MainLayout.js";
import RegisterPage from "@/presentation/auth/RegisterPage.js";
import ProtectedRoute from "./ProtectedRoute.js";

const router = createBrowserRouter([
  {
    path: "/",
    
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        )
      }
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
