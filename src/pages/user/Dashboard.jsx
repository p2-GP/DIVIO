import React, { useContext, useEffect } from "react";
import TableList from "../../components/TableList";
import dataContext from "../../stores/DataProvider";
import { readDatabase } from "../../utils";
import { onValue } from "firebase/database";
import Modal from "../../components/Modal";

const Dashboard = () => {
	const { user, setUser, data, setData } = useContext(dataContext);

	console.log(data);

	const readAfterLoad = async () => {
		try {
			const res = await readDatabase("/users");
			onValue(res, (snapshot) => {
				const datas = snapshot.val();
				// console.log(Object.entries(datas));

				const index = Object.entries(datas).find((el) => el[0] === localStorage.userid);

				if (index) {
					setUser({ id: index[0], ...index[1][0] });
				}
			});
		} catch (error) {
			// console.log(error);
			validation(error);
		}
	};

	const fetchSchedule = async (url) => {
		try {
			const res = await readDatabase(url);
			onValue(res, (snapshot) => {
				const datas = snapshot.val();
				const match = Object.entries(datas).filter((el) => {
					return el[1][0].userid === localStorage.userid;
				});

				const matchObj = match.map((el) => {
					const [id, arrObj] = el;
					const [obj] = arrObj;

					return obj;
				});

				setData(matchObj);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (localStorage.userid && !user.name) {
			console.log("masuk");

			readAfterLoad();
		}

		fetchSchedule();
	}, []);

	useEffect(() => {
		fetchSchedule("/schedule");
	}, []);

	return (
		<>
			<div className="flex justify-between">
				<h1 className="text-3xl font-extrabold">Schedule</h1>
				<span className="text-3xl font-extrabold">{user && user.name}</span>
			</div>
			{data.length > 0 ? <TableList /> : <div className="flex items-center justify-center font-extrabold h-[30vh] text-2xl">No Schedule</div>}

			<Modal />
		</>
	);
};

export default Dashboard;
