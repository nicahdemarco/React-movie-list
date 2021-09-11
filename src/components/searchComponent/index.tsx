import React from "react";
import "./searchComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchComp = ({ ...props }) => {
	return (
		<div className="d-flex search-comp">
			<FontAwesomeIcon className="search-icon" icon="search" />
			<input
				type="text"
				className="d-flex"
				placeholder="Search for a movie..."
			/>
		</div >
	);
};
