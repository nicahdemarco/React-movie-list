import { IRawMovies } from "../App";

export const getMovies = (API_KEY: string): Promise<IRawMovies> => {
    const URL_REQUEST = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    return fetch(URL_REQUEST)
        .then((movieDbRes: Response) => movieDbRes.json())
        .catch((err: Error) => {
            return errorParse(err);
        });
};

export const getUserInput = (API_KEY: string, ENCODED_QUERY: string): Promise<any> => {
    const URL_REQUEST = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${ENCODED_QUERY}&language=en-US&page=1&include_adult=false`;

    return fetch(URL_REQUEST)
        .then((movieDbRes: Response) => movieDbRes.json())
        .catch((err: Error) => {
            return errorParse(err);
        });
}

//TODO: convert to fn to manage backend errors
const errorParse = (err: Error) => {
    console.log(`ERROR: ${err.message}`);
    return `<div> Something went wrong, ${err.message}. Please try again later...</div>`;
};