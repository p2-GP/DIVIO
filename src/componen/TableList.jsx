import React from "react";

const TableList = ({ data }) => {
	return (
		<div className="overflow-x-auto">
			<table className="table table-zebra">
				<thead>
					<tr>
						<td>No</td>
						<td>Room Id</td>
						<td>Date</td>
						<td>Status</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableList;
