import React from "react";
import { IRawMovies } from "../../App";
// import { IMovieCard } from "../movieCardComponent";
import ReactStars from 'react-stars'
import "./ratingFilterComp.css";

export const RatingFilterComp = ({ results, lala }: IRawMovies): JSX.Element => {

	// const moviesByRate: IMovieCard[] = results;

	// const getMoviesByRate: void = moviesByRate.forEach((m) => m.id);

	const ratingChanged = (newRating: any) => {
		console.log(newRating)
	}

	return (

		<div className="d-flex rate-container">
			<h3 className="d-flex rate-text"> Filter by rating</h3>
			< ReactStars
				count={5}
				onChange={ratingChanged}
				size={32}
				color2={'#ffd700'}
			/>
		</div>

	);
};
