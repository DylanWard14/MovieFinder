import axios, { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { Actions, MovieResponse } from './types';

export const setMovie = (movieId: number) => {
    // TODO investigate better ThunkDispatch typing
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
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
