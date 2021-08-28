import React from "react";
import "./searchComp.css";

export const SearchComp = ({...props}) => {
	return (
		<div className="search-comp my-1">
			<input
				type="text"
				className=" mx-1"

			/>
			<button className="btn btn-primary mx-1">Add</button>
		</div>
	);
};
