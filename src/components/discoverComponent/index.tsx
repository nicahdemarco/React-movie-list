import React from "react";
import { IRawMovies } from "../../App";
import { RatingFilterComp } from "../ratingFilterComponent";
import { MovieCardComp } from "../movieCardComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./discoverComp.css";

export const DiscoverComp = ({ results }: IRawMovies): JSX.Element => {

	let filteredMovies: IMovieCard[];
	filteredMovies = results.filter((m) => {
		if (results.indexOf(m) < 5) {
			return m;
		}
		return filteredMovies;

	});

	let ifTrue = () => {
		console.log('rating comp');
	};

	return results === null ? (
		<div className="d-flex justify-content-center align-items-center discover-comp">
			<div> Loading...</div>
		</div>
	) : (
		<div className="d-flex discover-comp">
			<div id="lala" className='title-container'>
				<h3 className="d-flex title-text"> <FontAwesomeIcon icon="fire-alt" />Popular Movies</h3>
				{/* <div className="rate-comp-container"> */}

					<RatingFilterComp results={results} lala={ifTrue}></RatingFilterComp>
				</div>
			{/* </div> */}
			{/* {true &&
				<div className='rated-movies-container'>
					{
						filteredMovies.map((movie, key) => {
							return <MovieCardComp results={movie} key={key} />
						})
					}
				</div>
			} */}
			<div className='card-container'>
				{
					filteredMovies.map((movie, key) => {
						return <MovieCardComp results={movie} key={key} />
					})
				}
			</div>
		</div >
	);
};
