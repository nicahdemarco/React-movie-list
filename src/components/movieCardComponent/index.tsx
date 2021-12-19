import React, { useState } from "react";
import { MovieDetailComp } from "../movieDetailComponent";
import "./movieCardComp.css";

export interface IMovieCard {
	id: number;
	title: string;
	popularity: number;
	poster_path: string;
	vote_average?: number;
	overview?: string;
	release_date?: string;
}

export const MovieCardComp = ({ results }: any): JSX.Element => {

	const [modalState, setModalState] = useState<boolean>(false);
	const movies: IMovieCard = results;
	const isPosterFound: boolean = !!movies.poster_path;

	const openCloseModal = () => {
		setModalState(!modalState);
	}

	const getPosterPath = (path: string): string => {
		const URL = 'https://image.tmdb.org/t/p/w500';
		let fullURL = ''

		if (path !== null) {
			fullURL = `url(${URL}${path})`
		}
		return fullURL;
	};

	const setBackgroundClassName = (): string => {
		return !isPosterFound ? 'poster poster-not-found' : 'poster';
	}

	const toPercentage = (num: number): string => {
		let numberTofix = ((num * 10) / 1000);
		return `${numberTofix.toFixed(1)}%`;
	}

	return (
		<>
			<div className="align-items-center">
				{

					<div className="justify-content-space-between movie-container">
						<div className={setBackgroundClassName()} style={{ backgroundImage: getPosterPath(movies.poster_path) }}>
							<div className="poster-data" onClick={() => openCloseModal()}>
								<p >{movies.title}</p>
								<p>Popularity: {toPercentage(movies.popularity)}</p>
								<p>Votes: {movies.vote_average}</p>
							</div>

							<div>
								{modalState &&
									<MovieDetailComp
										modalState={modalState}
										setModalState={setModalState}
										title={movies.title}
										getPosterPath={getPosterPath}
										poster_path={movies.poster_path}
										overview={movies.overview ? movies.overview : ''}
										release={movies.release_date ? movies.release_date : ''}
									/>
								}
							</div>

						</div>
					</div>

				}
			</div>
		</>
	);
};

