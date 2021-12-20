import React, { Suspense } from "react";
import { LoadingComponent } from "../loadingComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IMovieCard } from "../movieCardComponent";

import "./movieDetailComp.css";

// interface IMovieDetails extends IMovieCard {
// 	overview?: string;
// 	release_date?: string;
// }

export const MovieDetailComp = ({ 
									modalState,
									setModalState,
									title,
									overview,
									getPosterPath,
									poster_path,
									release
								} : {
									modalState: boolean,
									setModalState: (bol: boolean) => void,
									getPosterPath: (str: string) => string,
									title: string,
									overview: string,
									poster_path: string,
									release: string
								}): JSX.Element => {

const setBackgroundClassName = (): string => {
	return !poster_path ? 'card__background poster-not-found' : 'card__background';
}
								

	return modalState === null ? (
		<>
			<div className="discover-comp">
				<Suspense fallback={<LoadingComponent />}></Suspense>
			</div>
		</>
	) : (
		<>
			<div className="modal-wrapper">
				<div className='modal-container'>
					<button className="modal__close-button "
						onClick={() => setModalState(false)}
					>
						<FontAwesomeIcon className="icon" icon="times" />
					</button>
					<div className="modal__scroll-area">
						<header className='modal-header'>
							<div className={setBackgroundClassName()} style={{ backgroundImage: getPosterPath(poster_path) }}></div>
							<h2 className='modal-title'>
								{title }
							</h2>
							<h4>
								({release.split('', 4)})
							</h4>
						</header>
						<main className='modal-body modal__content'>
							<p> {overview} </p>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};
