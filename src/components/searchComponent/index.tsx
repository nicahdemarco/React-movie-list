import React, { useState } from "react";
import "./searchComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchComp = ({ searchState, setSearchState }: { searchState: string, setSearchState: React.Dispatch<React.SetStateAction<string>>  }): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('');

	let handleInputChange = (): void => {
		searchState = inputValue
		setSearchState(searchState);
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
					onChange={(e) => { setInputValue(e.target.value) }}
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


