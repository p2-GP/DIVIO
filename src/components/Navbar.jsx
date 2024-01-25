import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarUser = () => {
	const navigate = useNavigate();
	const onLogout = () => {
		localStorage.removeItem("access_token");
		navigate("/login");
	};

	return (
		<div className="px-10 py-10 h-[87.5vh] w-3/12 shadow-2xl border-1 border-slate-200 rounded-lg bg-white text-black">
			<h1 className="font-extrabold text-4xl mb-5 ">Divio</h1>
			<nav className="flex flex-col h-full justify-between">
				<ul className="flex flex-col gap-3">
					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) => {
								return isActive ? "bg-red-700 px-5 w-[150px] block text-white rounded-full" : "";
							}}
						>
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/add"}
							className={({ isActive }) => {
								return isActive ? "bg-red-700 px-5 w-[150px] block text-white rounded-full" : "";
							}}
						>
							Category
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							to={"/user"}
							className={({ isActive }) => {
								return isActive ? "bg-red-700 px-5 w-[150px] block text-white rounded-full" : "";
							}}
						>
							User
						</NavLink>
					</li> */}
				</ul>

				<button className="btn btn-sm bg-black mb-16 text-white rounded-full" onClick={onLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default NavbarUser;
