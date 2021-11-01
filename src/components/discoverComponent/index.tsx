import React, { useState, Suspense } from "react";
import { IRawMovies } from "../../App";
import { RatingFilterComp } from "../ratingFilterComponent";
import { MovieCardComp } from "../movieCardComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadingComponent } from "../loadingComponent";

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
		<div className="discover-comp">
			<Suspense fallback={<LoadingComponent />}></Suspense>

		</div>
	) : (
		<div className="discover-comp">

			<div className='title-container'>
				<h3> <FontAwesomeIcon icon="fire-alt" />Popular Movies</h3>
				<RatingFilterComp results={results} filterAction={filterAction} ratingState={ratingState}></RatingFilterComp>
			</div>

			<Suspense fallback={<LoadingComponent />}>
				<div className='card-container'>
					{
						ratingState !== 0 ?
							ratedMovies.map((m) => {

								const starsState = ratingState * 2;
								if (m.vote_average && m.vote_average <= starsState) {
									return results && < MovieCardComp results={m} key={m.id} />
								}

								return null;
							}) : null
					}
				</div>
			</Suspense>

			<Suspense fallback={<LoadingComponent />}>
				<div className='card-container'>
					{ratingState === 0 ?
						filteredMovies.map((movie, key) => {
							return <MovieCardComp results={movie} key={key} />
						})
						: null
					}
				</div>
			</Suspense>

			{/* <Suspense fallback={<LoadingComponent />}>
				<div className='card-container'>
					{ratingState === 0 ?
						filteredMovies.map((movie, key) => {
							return <MovieCardComp results={movie} key={key} />
						})
						: null
					}
				</div>
			</Suspense> */}
		</div >
	);
};
