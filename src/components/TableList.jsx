import React from "react";
import { randomID } from "../utils";

const TableList = ({ data }) => {
	return (
		<>
			<div className="overflow-x-auto">
				<table className="table table-zebra">
					<thead>
						<tr>
							<td>No</td>
							<td>Room Id</td>
							<td>Link Url</td>
							<td>Date</td>
							<td>Status</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							{data.map((el, i) => {
								<>
									<td>{i + 1}</td>
									<td>{el.url ? el.url : randomID(5)}</td>
									<td>http://localhost:5173/main?roomID={el.date}</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</>;
							})}
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TableList;
