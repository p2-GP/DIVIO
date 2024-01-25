import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validation } from "../utils/validation";
import { ToastContainer, toast } from "react-toastify";
import { app, writeDatabase } from "../utils";
import { onChildAdded } from "firebase/database";

export default function RegisterPage() {
	const navigate = useNavigate();
	const [userInput, setUserInput] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleUser = async (e) => {
		const { name, value } = e.target;

		setUserInput((val) => ({
			...val,
			[name]: value,
		}));
	};

	const handleReg = async (e) => {
		e.preventDefault();
		try {
			const data = await writeDatabase("/users", userInput);

			onChildAdded(commentsRef, (data) => {
				addCommentElement(postElement, data.key, data.val().text, data.val().author);
			});
			console.log(data);
		} catch (error) {
			console.log(error);
			// validation(error);
		}
	};
	return (
		<>
			<div className="w-full max-w-xs flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">Create account</h1>
				<ToastContainer />
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4 md:space-y-6" onSubmit={handleReg}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							name="name"
							value={userInput.name}
							onChange={handleUser}
							placeholder="Username"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							name="email"
							value={userInput.email}
							onChange={handleUser}
							placeholder="Email@example.com"
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							name="password"
							value={userInput.password}
							onChange={handleUser}
							placeholder="******************"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="px-4 py-2 flex flex-col items-center justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign Up
						</button>
					</div>
				</form>
				<p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
			</div>
		</>
	);
}
