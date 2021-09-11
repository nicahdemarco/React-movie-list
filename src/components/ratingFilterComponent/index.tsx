import React from "react";
import { IRawMovies } from "../../App";
import { IMovieCard } from "../movieCardComponent";
import ReactStars from 'react-stars'
import { render } from 'react-dom';
import "./ratingFilterComp.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const RatingFilterComp = ({ results, lala }: IRawMovies): JSX.Element => {
	console.log(results);

	const moviesByRate: IMovieCard[] = results;

	const getMoviesByRate: void = moviesByRate.forEach((m) => m.id);

	const ratingChanged = (newRating: any) => {
		console.log(newRating)
	}

	render(
		<ReactStars
			count={5}
			onChange={ratingChanged}
			size={24}
			color2={'#ffd700'}
		/>,

		document.getElementById('lala')
	);

	return (

		<div className="d-flex rate-comp-container">

			<h3 className="d-flex rate-text">Filter by rating </h3>

			<div id="rate-container" onClick={lala}>
				<input type="radio" name="star" id="star_01" />
				<label className="star" htmlFor="star_01"></label>
				<input type="radio" name="star" id="star_02" />
				<label className="star" htmlFor="star_02"></label>
				<input type="radio" name="star" id="star_03" />
				<label className="star" htmlFor="star_03"></label>
				<input type="radio" name="star" id="star_04" />
				<label className="star" htmlFor="star_04"></label>
				<input type="radio" name="star" id="star_05" />
				<label className="star" htmlFor="star_05"></label>
			</div>

		</div>

	);
};
