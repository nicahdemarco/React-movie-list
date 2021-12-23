import React, { useState, Suspense } from "react";
import { RatingFilterComp } from "../ratingFilterComponent";
import { MovieCardComp } from "../movieCardComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadingComponent } from "../loadingComponent";
// import { getUserInput } from '../../fetchService/fetchService';

import "./discoverComp.css";

export const DiscoverComp = ({ movieResults }: { movieResults: IMovieCard[] }): JSX.Element => {
	const [ratingState, setRatingState] = useState<number>(0);

	let filteredMovies: IMovieCard[];

	filteredMovies = movieResults.filter((movie: IMovieCard) => {
		if (movieResults.indexOf(movie) < 5) {
			return movie;
		}
		return filteredMovies;
	});

	const filterAction = (newState: number): void => {
		setRatingState(newState)
	};

	return movieResults === null ? (
		<>
			<div className="discover-comp">
				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}></Suspense>
			</div>
		</>

	) : (
		<>
			<div className="discover-comp">

				<div className='title-container' >
					<h3 className='title'
					// onClick={() => getUserInput(API_KEY, MOVIE_QUERY)
					>
						<FontAwesomeIcon icon="fire-alt" />Popular Movies</h3>
					<RatingFilterComp
						movieResults={movieResults}
						filterAction={filterAction}
						ratingState={ratingState}
					/>
				</div>

				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}>
					<div className='card-container'>
						{
							ratingState !== 0 ?
								movieResults.map((movie, key) => {
									const starsState = ratingState * 2;

									if (movie.vote_average && movie.vote_average <= starsState) {
										return < MovieCardComp movieResults={movie} key={key} />
									}

									return null;
								})
								: null
						}
					</div>
				</Suspense>

				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}>
					<div className='card-container'>
						{ratingState === 0 ?
							filteredMovies.map((movie, key) => {
								return <MovieCardComp movieResults={movie} key={key} />
							})
							: null
						}
					</div>
				</Suspense>

				{/* <Suspense fallback={<LoadingComponent message={'searching movies'} />}>
					<div className='card-container'>
						{
							// searchResponseValue !== undefined ?
							searchResponseValue.movieResults.map((movie: any, key: any) => {
								return <MovieCardComp movieResults={movie} key={key} />
							})
							// : ''
						}
					</div>
				</Suspense> */}
			</div >
		</>
	);
};
