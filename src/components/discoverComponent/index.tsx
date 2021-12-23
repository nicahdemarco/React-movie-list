import React, { useState, Suspense } from "react";
import { RatingFilterComp } from "../ratingFilterComponent";
import { MovieCardComp } from "../movieCardComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadingComponent } from "../loadingComponent";
import "./discoverComp.css";

export const DiscoverComp = ({ movieResults, searchResponseState }: { movieResults: IMovieCard[], searchResponseState: IMovieCard[] }): JSX.Element => {
	const [ratingState, setRatingState] = useState<number>(0);

	let filteredMovies: IMovieCard[];

	filteredMovies = movieResults && movieResults.filter((movie: IMovieCard) => {
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
					// onClick={() => getMovies(API_KEY)}
					>
						<FontAwesomeIcon icon="fire-alt" />Popular Movies</h3>
					<RatingFilterComp
						movieResults={movieResults}
						filterAction={filterAction}
						ratingState={ratingState}
					/>
				</div>

				{/* Filter by rating list */}
				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}>
					<div className='card-container'>
						{
							ratingState !== 0 ?
								movieResults.map((movieItem, key) => {
									const starsState = ratingState * 2;

									if (movieItem.vote_average && movieItem.vote_average <= starsState) {
										return < MovieCardComp
											movie={movieItem}
											key={key}
										/>
									}

									return null;
								})
								: null
						}
					</div>
				</Suspense>

				{/* Popular movie list */}
				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}>
					<div className='card-container'>
						{
							ratingState === 0 && !searchResponseState.length ?
								filteredMovies && filteredMovies.map((movie, key) => {
									return <MovieCardComp movie={movie} key={key} />
								})
								: null
						}
					</div>
				</Suspense>

				{/* Search result movie list */}
				<Suspense fallback={<LoadingComponent message={'searching movies'} />}>
					<div className='card-container'>
						{
							searchResponseState.length > 0 ?
								searchResponseState.map((movie: any, key: any) => {
									return <MovieCardComp movie={movie} key={key} />
								})
								: ''
						}
					</div>
				</Suspense>
			</div >
		</>
	);
};