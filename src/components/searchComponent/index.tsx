import React, { useState } from "react";
import "./searchComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUserInput } from '../../fetchService/fetchService';
import { IMovieCard } from "../movieCardComponent";

type SearchCompType = { setSearchResponseState: (param: IMovieCard[]) => void };

export const SearchComp = ({ setSearchResponseState }: SearchCompType): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('');

	const API_KEY = "66e6c4190fa8095b70e61bda4702a19f";
	const MOVIE_QUERY = encodeURI(inputValue);

	const errorParse = (err: Error) => {
		console.log(`ERROR: ${err.message}`);
		return <div> Something went wrong, ${err.message}. Please try again later...</div>;
	};

	let handleInputChange = (): void => {
		getUserInput(API_KEY, MOVIE_QUERY)
			.then((response) => setSearchResponseState(response.results))
			.catch((err) => errorParse(err));
	};


	return (
		<>
			<div className="search-comp">
				<FontAwesomeIcon className="search-icon" icon="search" />
				<input
					name='searchValue'
					type="text"
					placeholder="Search for a movie..."
					value={inputValue}
					onKeyPress={(e) => e.key === 'Enter' && handleInputChange()}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				{
					inputValue ?
						<FontAwesomeIcon
							className="clear-icon"
							icon="times"
							onClick={() => setInputValue('')}
						/>
						: null
				}
			</div >
		</>
	);
};