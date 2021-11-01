import React, { Suspense } from "react";
import { LoadingComponent } from "../loadingComponent";
import { IMovieCard } from "../movieCardComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./movieDetailComp.css";

export const MovieDetailComp = ({ modalState, setModalState }: any, results: IMovieCard, poster: string): JSX.Element => {

	const movies: IMovieCard = results;

	return modalState === null ? (
		<div className="discover-comp">
			<Suspense fallback={<LoadingComponent />}></Suspense>

		</div>
	) : (
		<div className="modal-wrapper">
			<div className='modal-container'
				onBlur={() => setModalState()}
			>
				<button className="modal__close-button "
					onClick={() => setModalState()}
				>
					<FontAwesomeIcon className="icon" icon="times" />''
				</button>
				<div className="modal__scroll-area">
					<header className='modal-header'>
						<div className="card__background" style={{ backgroundImage: poster }}></div>
						<h2 className='modal-title'>
							Title:{movies.title}
						</h2>
					</header>
					<main className='modal-body modal__content'>

						<p> {movies.overview} Synopsis: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium fugiat dicta nisi consectetur distinctio, blanditiis saepe cumque tenetur totam eveniet maxime. Laboriosam, eius nam. Ab similique doloribus facere quas. </p>

					</main>
				</div>
			</div>
		</div>
	);
};
