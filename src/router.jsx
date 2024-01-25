import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./pages/Login";
import LivePage from "./pages/LivePage";
import Layout from "./layout/Layout";
import RegisterPage from "./pages/Register";
import Homepage from "./pages/Homepage";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/user/Dashboard";

const router = createBrowserRouter([
	{
		loader: () => localStorage.getItem("userid") && redirect("/dashboard"),
		children: [
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
		],
	},

	{
		element: <UserLayout />,
		loader: () => !localStorage.getItem("userid") && redirect("/login"),
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "/main",
		element: <Homepage />,
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
