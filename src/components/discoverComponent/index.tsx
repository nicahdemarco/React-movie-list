import React, { useState, Suspense, useEffect } from "react";
import { RatingFilterComp } from "../ratingFilterComponent";
import { MovieCardComp } from "../movieCardComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadingComponent } from "../loadingComponent";
import "./discoverComp.css";

export const DiscoverComp = ({ results, searchState }: { results: IMovieCard[], searchState: string }): JSX.Element => {
	const [ratingState, setRatingState] = useState<number>(0);
	const [searchResponseValue, setSearchResponseState] = useState<any>();

	const API_KEY = "66e6c4190fa8095b70e61bda4702a19f";
	const MOVIE_QUERY = encodeURI(searchState);

	let ratedMovies: IMovieCard[] = results;
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

	const errorParse = (err: Error) => {
		console.log(`ERROR: ${err.message}`);
		return `<div> Something went wrong, ${err.message}. Please try again later...</div>`;
	};

	const getMovie = (): Promise<any> => {
		const URL_REQUEST = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE_QUERY}&language=en-US&page=1&include_adult=false`;

		return fetch(URL_REQUEST)
			.then((movieDbRes: Response) => movieDbRes.json())
			.then((data) => {
				setSearchResponseState(data);
			})
			.catch((err: Error) => {
				return errorParse(err);
			});
	}
	useEffect(() => {
		if (MOVIE_QUERY) {
			getMovie();
		}
	}, [MOVIE_QUERY])


	return results === null ? (
		<>
			<div className="discover-comp">
				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}></Suspense>
			</div>
		</>

	) : (
		<>
			<div className="discover-comp">

				<div className='title-container'>
					<h3> <FontAwesomeIcon icon="fire-alt" />Popular Movies</h3>
					<RatingFilterComp results={results} filterAction={filterAction} ratingState={ratingState}></RatingFilterComp>
				</div>

				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}>
					<div className='card-container'>
						{
							ratingState !== 0 && !searchResponseValue ?
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

				<Suspense fallback={<LoadingComponent message={'Loading movies'} />}>
					<div className='card-container'>
						{ratingState === 0 && !searchResponseValue ?
							filteredMovies.map((movie, key) => {
								return <MovieCardComp results={movie} key={key} />
							})
							: null
						}
					</div>
				</Suspense>

				<Suspense fallback={<LoadingComponent message={'searching movies'} />}>
					<div className='card-container'>
						{
							searchResponseValue !== undefined ?
								searchResponseValue.results.map((movie: any, key: any) => {
									return <MovieCardComp results={movie} key={key} />
								})
								: ''
						}
					</div>
				</Suspense>
			</div >
		</>
	);
};
