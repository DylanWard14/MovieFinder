import axios, { AxiosResponse } from 'axios';

import { AppThunk } from '../types';
import { Actions, MovieResponse } from './types';

export const setMovie = (movieId: number): AppThunk => {
    return dispatch => {
        dispatch(setMovieRequest());
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
            )
            .then((response: AxiosResponse<MovieResponse>) => {
                dispatch(setMovieSuccess(response));
            })
            .catch(error => {
                dispatch(setMovieError(error));
            });
    };
};

export const setMovieRequest = () => {
    return {
        type: Actions.SET_MOVIE_REQUEST,
    };
};

export const setMovieSuccess = (response: AxiosResponse<MovieResponse>) => {
    return {
        type: Actions.SET_MOVIE_SUCCESS,
        payload: {
            response,
        },
    };
};

export const setMovieError = (error: string) => {
    return {
        type: Actions.SET_MOVIE_ERROR,
        payload: {
            error,
        },
    };
};
