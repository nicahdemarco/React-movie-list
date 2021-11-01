import React from "react";
import "./searchComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchComp = ({ ...props }) => {

	// const inputValue = (newValue: string) => {
	// 	if (newValue) {
	// 		props.value = newValue;
	// 	}
	// }

	return (
		<div className="search-comp">
			<FontAwesomeIcon className="search-icon" icon="search" />
			<input
				type="text"
				placeholder="Search for a movie..."
				value=''	
			/>
		</div >
	);
};
