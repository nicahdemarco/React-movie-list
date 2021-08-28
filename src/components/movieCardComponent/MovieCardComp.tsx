import React from "react";
import { IMovies } from "../../App";
import "./movieCardComp.css";

export interface IMovieCard {
	id: number;
	title: string;
	popularity: number;
	poster_path: string;
}

export const MovieCardComp = ({ results }: IMovies): JSX.Element => {

	const movieData: IMovieCard[] = results;
	console.log(movieData);

	// const toPercentage = (num: number): string => {
	// 	let numberTofix = ((num * 100) / 1000);
	// 	return numberTofix.toFixed(1);
	// }


	return (
		<div className="d-flex align-items-center ">
			<div className="d-flex justify-content-space-evenly movie-container">
				{/* <div className="poster" style={{ background: movie ? movie.poster_path : undefined }}> */}
					{/* <h4>{movie?.title}</h4> no confiarse del ? siempre es mejor chequear si existe el dato */}
					{/* <h4>{movie ? toPercentage(movie.popularity) : undefined}</h4> se puede chequear en cada lugar a utilizar o si son mucha cantidad mejor en lugar que estoy armando los datos */}
				{/* </div> */}
			</div>
		</div>
	)
}
