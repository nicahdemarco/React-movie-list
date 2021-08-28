import React from "react";
import { IMovies } from "../../App";
import { MovieCardComp, IMovieCard } from "../movieCardComponent/MovieCardComp";
import "./discoverComp.css";

export const DiscoverComp = (props: IMovies): JSX.Element => {

	let filteredMovies: IMovieCard[];
	filteredMovies = props.results.filter((m) => {
		if (props.results.indexOf(m) < 5) {
			return m;
		}

		return filteredMovies;
	});


	return props.results === null ? (
		<div className="d-flex justify-content-center align-items-center bg-primary  text-white discover-comp">
			<div> Loading...</div>
		</div>
	) : (
		<div className="d-flex discover-comp bg-primary text-white ">
			<div className='title-container'>
				<span className="d-flex ">Popular Movies</span>
				<span className="d-flex">View All</span>
			</div>
			<div className="card-container">
				{
					filteredMovies.map(() => {
						return <MovieCardComp results={filteredMovies} />
					})
				}
			</div>
		</div>
	);
};
