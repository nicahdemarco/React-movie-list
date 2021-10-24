import React, { useState, Suspense } from "react";
import { IRawMovies } from "../../App";
import { RatingFilterComp } from "../ratingFilterComponent";
import { MovieCardComp } from "../movieCardComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./discoverComp.css";

export const DiscoverComp = ({ results }: IRawMovies): JSX.Element => {
	const [ratingState, setRatingState] = useState<number>(0);

	let filteredMovies: IMovieCard[];
	filteredMovies = results.filter((m) => {
		if (results.indexOf(m) < 5) {
			return m;
		}
		return filteredMovies;
	});

	const filterAction = (newState: number): void => {
		setRatingState(newState)
	};

	let ratedMovies: IMovieCard[] = results;

	return results === null ? (
		<div className="d-flex justify-content-center align-items-center discover-comp">
			<Suspense fallback={<div> Loading...</div>}></Suspense>

		</div>
	) : (
		<div className="d-flex discover-comp">

			<div className='title-container'>
				<h3 className="d-flex title-text"> <FontAwesomeIcon icon="fire-alt" />Popular Movies</h3>
				<RatingFilterComp results={results} filterAction={filterAction} ratingState={ratingState}></RatingFilterComp>
			</div>

			<Suspense fallback={<div> Filtering Movies...</div>}>
				<div className='card-container'>
					{
						ratingState !== 0 ?
							ratedMovies.map((m, key) => {
								let rate: number = 0;

								if (m.vote_average) {

									if (m.vote_average > 2) {
										rate = 2;}
									// } else if (m.vote_average <= 4) {
									// 	rate = 4;

									// } else if (m.vote_average <= 6) {
									// 	rate = 6;

									// } else if (m.vote_average <= 8) {
									// 	rate = 8;

									// }
								}
								// console.log(m, rate);

								return rate && rate <= ratingState ? < MovieCardComp results={m} key={key} /> : undefined;
							}) : undefined
					}
				</div>
			</Suspense>

			<Suspense fallback={<div> Loading Movies...</div>}>
				<div className='card-container'>
					{ratingState === 0 ?
						filteredMovies.map((movie, key) => {
							return <MovieCardComp results={movie} key={key} />
						})
						: undefined
					}
				</div>
			</Suspense>
		</div >
	);
};
