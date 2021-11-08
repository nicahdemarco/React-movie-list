import React from "react";
import { IRawMovies } from "../../App";
import ReactStars from 'react-stars'
import "./ratingFilterComp.css";

export const RatingFilterComp = ({ filterAction, ratingState }: IRawMovies): JSX.Element => {

	const ratingChanged = (newRating: number) => {
		if (ratingState === newRating) {
			filterAction(0);
		} else {
			filterAction(newRating);
		}
	}

	return (
		<>
			<div className="rate-container">
				<h3 className="rate-text"> Filter by rating</h3>
				< ReactStars
					className={'stars-container'}
					count={5 | 0}
					value={ratingState ? ratingState : 0}
					size={32}
					color2={'#ffd700'}
					half={false}
					onChange={ratingChanged}
				/>
			</div>
		</>
	);
};
