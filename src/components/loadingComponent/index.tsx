import React from "react";
import "./loadingComp.css";

export const LoadingComponent = ({ message }: any): JSX.Element => {

	return (
		<>
			<div className="loading-container">
				<span className="loading-logo"> {message} </span>
			</div>
		</>
	);

};
