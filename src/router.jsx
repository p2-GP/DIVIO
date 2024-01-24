import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./pages/Login";
import LivePage from "./pages/LivePage";
import Layout from "./layout/Layout";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  {
    path: "/live",
    element: <LivePage />,
  },
  {
    path: "/",
    element: <Layout />,
    loader: () => !localStorage.getItem("access_token") && redirect("/login"),
    children: [
      {
        path: "/live",
        element: <LivePage />,
      },
    ],
  },
]);

export default router;
