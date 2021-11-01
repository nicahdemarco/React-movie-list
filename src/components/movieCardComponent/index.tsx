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
}

export const MovieCardComp = ({ results }: any): JSX.Element => {

	const [modalState, setModalState] = useState(false);
	const movies: IMovieCard = results;
	let theMovie: number = 0;


	const openCloseModal = () => {
		setModalState(!modalState);
		theMovie= movies.id;

	}

	const getPosterPath = (path: string): string => {
		const URL = 'https://image.tmdb.org/t/p/w500';
		return `url(${URL}${path})`
	};

	const toPercentage = (num: number): string => {
		let numberTofix = ((num * 10) / 1000);
		return `${numberTofix.toFixed(1)}%`;
	}

	return (
		<div className="align-items-center">
			{

				<div className="justify-content-space-between movie-container">
					<div className="poster" style={{ backgroundImage: getPosterPath(movies.poster_path) }}>
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
									results={results}
									getPosterPath={getPosterPath}
									theMovie={theMovie}
								/>
							}
						</div>

					</div>
				</div>

			}
		</div>
	);
};

