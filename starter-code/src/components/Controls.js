import React from "react";

const Controls = ({ onClickRandomContact, onClickSort, sortKey }) => {
	return (
		<div>
			<button
				className="btn btn-light"
				type="button"
				onClick={onClickRandomContact}
			>
				{" "}
				Add a Random contact
			</button>

			<button
				className="btn btn-success"
				type="button"
				sortKey="popularity"
				onClick={() => onClickSort("popularity")}
			>
				Sort by popularity
			</button>

			<button
				className="btn btn-outline-danger"
				type="button"
				sortKey="name"
				onClick={() => onClickSort("name")}
			>
				Sort by name
			</button>
		</div>
	);
};

export default Controls;
