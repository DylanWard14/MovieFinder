import axios, { AxiosResponse } from 'axios';

import { AppThunk } from '../types';
import { Actions, SearchResponse } from './types';

export const searchRequest = (searchTerm: string): AppThunk => {
    return dispatch => {
        dispatch(setSearchRequest(searchTerm));
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
            )
            .then(response => {
                dispatch(setSearchSuccess(response));
            })
            .catch(error => {
                dispatch(setSearchError(error));
            });
    };
};

export const setSearchRequest = (searchTerm: string) => {
    return {
        type: Actions.SEARCH_REQUEST,
        payload: {
            searchTerm,
        },
    };
};

export const setSearchSuccess = (response: AxiosResponse<SearchResponse>) => {
    return {
        type: Actions.SEARCH_SUCCESS,
        payload: {
            response,
        },
    };
};

export const setSearchError = (error: string) => {
    return {
        type: Actions.SEARCH_ERROR,
        payload: { error },
    };
};
