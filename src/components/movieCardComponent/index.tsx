import React from "react";
import "./movieCardComp.css";

export interface IMovieCard {
	id: number;
	title: string;
	popularity: number;
	poster_path: string;
}

export const MovieCardComp = ({ results }: any): JSX.Element => {

	const movies: IMovieCard = results;

	const getPosterPath = (path: string): string => {
		const URL = 'https://image.tmdb.org/t/p/w500';
		return `url(${URL}${path})`
	};

	const toPercentage = (num: number): string => {
		let numberTofix = ((num * 10) / 1000);
		return `${numberTofix.toFixed(1)}%`;
	}

	return (
		<div className="d-flex align-items-center">
			{

				<div className="d-flex justify-content-space-between movie-container ">
					<div className="d-flex poster" style={{ backgroundImage: getPosterPath(movies.poster_path) }}>
						<div className="poster-data">
							<p >{movies.title}</p>
							<p>Popularity: {toPercentage(movies.popularity)}</p>
						</div>
					</div>
				</div>

			}
		</div>
	);
};

