import React from "react";
import { dateNow, randomID, writeDatabase } from "../utils";
import { errtoast } from "../utils/sweetAlert";

const Modal = () => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const [userid, type, date, url] = e.target;
		if (new Date(date.value) < new Date(dateNow())) {
			return errtoast("date can't less than today");
		}

		console.log(dateNow(), "====", date.value);

		const res = writeDatabase("/schedule", { type: type.value, date: date.value, userid: userid.value, url: url.value });
	};

	const onChangeDate = (e) => {
		if (new Date(e.target.value) < new Date(dateNow())) {
			errtoast("date can't less than today");
		}
	};

	return (
		<dialog id="mainmodal" className="modal z-[1]">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<h3 className="font-bold text-lg text-black my-3">Add Schedule</h3>
				<form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
					<input type="hidden" name="userid" defaultValue={localStorage.userid} />
					{/* <div className="flex flex-col w-full gap-3">
						<label htmlFor=""></label>
						<input type="text" name="name" placeholder="name" required />
					</div> */}
					<div className="flex flex-col w-full gap-1">
						<label className="text-lg" htmlFor="type">
							Type Of Call
						</label>
						<select type="text" name="type" placeholder="name" required className="input input-bordered input-info w-full">
							<option value="one">One on One</option>
							<option value="group">Group</option>
						</select>
					</div>
					<div className="flex flex-col w-full gap-1">
						<label className="text-lg" htmlFor="date">
							Date
						</label>
						<input className="input input-bordered input-info w-full" type="date" name="date" placeholder="name" required onChange={onChangeDate} />
						<input type="hidden" name="url" defaultValue={randomID(5)} />
					</div>
					<button className="btn w-full shadow-lg self-center rounded-full my-3 bg-slate-400">Submit</button>
				</form>
			</div>
		</dialog>
	);
};

export default Modal;
