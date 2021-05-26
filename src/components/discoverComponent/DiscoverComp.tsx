import React from "react";
import "./discoverComp.css";

export interface IMovies {
	page?:number;
	results: IMovieCard[];
}
export interface IMovieCard {
	id: number;
	title: string;
	popularity: number;
}

export const DiscoverComp = (props: IMovies) => {
	const movieData:IMovies = props.results;
	console.log(movieData.results);

	

	// const toPercentage = (num: number) => {
	// 	let numberTofix = (num * 100) / 1000;
	// 	return `${numberTofix.toFixed(2)}%`;
	// };

	return props.results === null ? (
		<div className="d-flex justify-content-center align-items-center bg-primary  text-white discover-comp">
			<div> Loading...</div>
		</div>
	) : (
		<div className="d-flex discover-comp align-items-center bg-primary text-white ">
			<h4 className="p-4">Discover</h4>
			<div className="conatiner">
				<div className="poster" title="original_title"></div>
				<h2>{movieData.results.map((i)=> i.title) }</h2>
			</div>
		</div>
	);
};
