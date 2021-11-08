import React, { useState } from "react";
import "./searchComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMovieCard } from "../movieCardComponent";

export const SearchComp = ({ results, searchValue, setSearchValueState }: any): JSX.Element => {
	// const [searchValue, setSearchValueState] = useState<string>('');
	const [clearValue, setClearValue] = useState<boolean>(false);


	const movies: IMovieCard = results;

	let handleInputChange = (event: any): void => {
		if (event && event.key === "Enter") {
			setClearValue(!!event.target.value)
			setSearchValueState(event.target.value);
			console.log(searchValue);

		}
	};

	let isClearInput = (e: React.ChangeEvent<HTMLInputElement>): boolean => {
		setClearValue(!!e.target.value)
		return e.target.value !== '' ? false : true;
	}

	return (
		<>
			<div className="search-comp">
				<FontAwesomeIcon className="search-icon" icon="search" />
				<input
					name='searchValue'
					type="text"
					placeholder="Search for a movie..."
					value={searchValue}
					onChange={(e) => { isClearInput(e); setSearchValueState(e.target.value) }}
					onKeyPress={(e) => e.key === 'Enter' && handleInputChange(e)}
				/>
				{
					clearValue && searchValue !== '' ?
						<FontAwesomeIcon className="clear-icon" icon="times" onClick={() => {
							setSearchValueState('')
						}} />
						: null
				}
			</div >
			{
				searchValue ?
					<div className="justify-content-space-between movie-container">
						{/* <div className="poster" style={{ backgroundImage: 'movies' }}>

						</div> */}
						<div className="poster-data">
							<p >{movies.title}</p>
							<p>Popularity: {movies.popularity}</p>
							<p>Votes: {movies.vote_average}</p>
						</div>
					</div>
					: null
			}
		</>
	);
};


