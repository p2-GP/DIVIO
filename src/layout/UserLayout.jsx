import React from "react";
import { Outlet } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";

const UserLayout = () => {
	return (
		<>
			<div className="flex justify-center items-center gap-5 h-screen bg-[#f7ffff]">
				<div className="w-10/12 m-auto flex gap-10">
					<NavbarUser />
					<main className="w-9/12 h-[87.5vh]  bg-white shadow-2xl  rounded-lg overflow-auto">
						<div className="flex flex-col p-5">
							<Outlet />
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default UserLayout;