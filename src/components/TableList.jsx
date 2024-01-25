import React, { useContext } from "react";
import { randomID } from "../utils";
import dataContext from "../stores/DataProvider";
import { Link } from "react-router-dom";

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
							<td>Type</td>
							<td>Status</td>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map((el, i) => {
								return (
									<tr className="text-md">
										<td>{i + 1}</td>
										<td>{el.url}</td>
										<Link to={`http://localhost:5173/main?roomID=${el.url}`}>
											<td>http://localhost:5173/main?roomID={el.url}</td>
										</Link>
										<td>{el.date}</td>
										<td>{el.type}</td>
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
