import axios from 'axios';
import { Actions } from './Types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export const searchRequest = (searchTerm: string) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(searchLoading(searchTerm));
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
            )
            .then(response => {
                dispatch(searchSuccess(response));
            });
    };
};

export const searchLoading = (searchTerm: string) => {
    return {
        type: Actions.SEARCH_LOADING,
        payload: {
            searchTerm,
        },
    };
};

export const searchSuccess = (response: any) => {
    return {
        type: Actions.SEARCH_SUCCESS,
        payload: {
            response,
        },
    };
};
