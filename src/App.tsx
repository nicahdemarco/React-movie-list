import React, { useState, useEffect } from "react";
import "./App.css";
import { DiscoverComp } from "./components/discoverComponent";
import { IMovieCard } from "./components/movieCardComponent";
import { SearchComp } from "./components/searchComponent";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faFireAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faArrowRight, faFireAlt, faSearch, faStar)
export interface IRawMovies {
	results: IMovieCard[];
	filterAction?: any;
	ratingState?:any;
}

function App() {
	const [appState, setAppState] = useState<IRawMovies>();

	const errorParse = (err: Error) => {
		console.log(`ERROR: ${err.message}`);
		return `<div> Something went wrong, please try again later...</div>`;
	};

	useEffect(() => {
		const getMoviesByPopularity = (): Promise<void> => {
			const API_KEY = "66e6c4190fa8095b70e61bda4702a19f";
			const URL_REQUEST = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

			fetch(URL_REQUEST)
				.then((movieDbRes: Response) => movieDbRes.json())
				.then((data) => {
					if (data) {
						setAppState(data);
					}
				})
				.catch((err: Error) => {
					return errorParse(err);
				});
			return Promise.resolve();
		};

		getMoviesByPopularity();
	}, []);

	return (
		<div className="App">
			<header className="App-header fondo">
				<h1>El mejor recomendador de peliculas y series de la historia</h1>
				<h3>Lo sabes...</h3>
				<div className="App-logo"></div>
				<div className="search-container">
					<SearchComp />
				</div>
			</header>
			<div className="container">
				{appState ? <DiscoverComp results={appState.results} /> : <h1>noooo narnia</h1>}
			</div>
		</div>
	);
}

export default App;
