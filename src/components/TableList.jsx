import React, { useContext } from "react";
import { randomID } from "../utils";
import dataContext from "../stores/DataProvider";

const TableList = () => {
	const { data } = useContext(dataContext);

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
						{data &&
							data.map((el, i) => {
								return (
									<tr>
										<td>{i + 1}</td>
										<td>{el.url}</td>
										<td>http://localhost:5173/main?roomID={el.url}</td>
										<td>{el.date}</td>
										<td>Test</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TableList;
