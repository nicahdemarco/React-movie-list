import React, { useState } from "react";
import "./searchComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUserInput } from '../../fetchService/fetchService';
// { searchState, setSearchState }: { searchState: string, setSearchState: React.Dispatch<React.SetStateAction<string>>}

export const SearchComp = ({ searchState, setSearchState }: { searchState: string, setSearchState: React.Dispatch<React.SetStateAction<string>>}): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('');

	const API_KEY = "66e6c4190fa8095b70e61bda4702a19f";
	const MOVIE_QUERY = encodeURI(inputValue);

	const errorParse = (err: Error) => {
		console.log(`ERROR: ${err.message}`);
		return `<div> Something went wrong, ${err.message}. Please try again later...</div>`;
	};

	let handleInputChange = (): void => {
		getUserInput(API_KEY, MOVIE_QUERY)
			.then((data) => setInputValue(data))
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


