import React, { useState, useEffect } from "react";
import "./App.css";
import { DiscoverComp } from "./components/discoverComponent";
import { IMovieCard } from "./components/movieCardComponent";
import { SearchComp } from "./components/searchComponent";
import { LoadingComponent } from "./components/loadingComponent";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faFireAlt, faSearch, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faArrowRight, faFireAlt, faSearch, faStar, faTimes)
export interface IRawMovies {
	results: IMovieCard[];
	filterAction?: any;
	ratingState?: number | undefined;
}

function App() {
	const [appState, setAppState] = useState<IRawMovies>();
	const [searchState, setSearchState] = useState<string>('');

	const API_KEY = "66e6c4190fa8095b70e61bda4702a19f";

	const errorParse = (err: Error) => {
		console.log(`ERROR: ${err.message}`);
		return `<div> Something went wrong, ${err.message}. Please try again later...</div>`;
	};

	useEffect(() => {
		const getMoviesByPopularity = (): Promise<void> => {
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
		<div className="app-container noise">
			<header className="App-header ">
				<h1>Find, Look, Fun!</h1>
				<div className="search-container">
					{<SearchComp
						searchState={searchState}
						setSearchState={setSearchState}
					/>}
				</div>
			</header>
			<div className="container">
				{appState ?
					<DiscoverComp
						results={appState.results}
						searchState={searchState}

					/> : <LoadingComponent message={'Loading movies'} />}
			</div>
		</div>
	);
}

export default App;
