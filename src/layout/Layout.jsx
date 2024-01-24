import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}