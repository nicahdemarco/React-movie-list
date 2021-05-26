import React, { useState, useEffect } from "react";
import "./App.css";
import { DiscoverComp } from "./components/discoverComponent/DiscoverComp";
import { SearchComp } from "./components/searchComponent/SearchComp";

function App() {
	const [appState, setAppState] = useState([]);

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
			<header className="App-header">
				<h1>El mejor recomendador de peliculas y series de la historia</h1>
				<h3>Lo sabes...</h3>
				<SearchComp />
			</header>
			<div className="container">
				<DiscoverComp results = {appState ? appState.results : null} />
			</div>
		</div>
	);
}

export default App;
