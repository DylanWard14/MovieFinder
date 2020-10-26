import axios, { AxiosResponse } from 'axios';

import { AppThunk } from '../types';
import { Actions, UserDetailsResponse } from './types';

export const getUserDetails = (): AppThunk => {
    return dispatch => {
        dispatch(getUserDetailsRequest());
        axios
            .get(
                `https://api.themoviedb.org/3/account?api_key=${
                    process.env.REACT_APP_API_KEY
                }&session_id=${localStorage.getItem('sessionID')}`,
            )
            .then((response: AxiosResponse<UserDetailsResponse>) => {
                dispatch(getUserDetailsSuccess(response));
            })
            .catch(error => {
                dispatch(getUserDetailsError(error));
            });
    };
};

export const getUserDetailsRequest = () => {
    return {
        type: Actions.GET_USER_DETAILS_REQUEST,
    };
};

export const getUserDetailsSuccess = (response: AxiosResponse<UserDetailsResponse>) => {
    return {
        type: Actions.GET_USER_DETAILS_SUCCESS,
        payload: {
            response,
        },
    };
};

export const getUserDetailsError = (error: string) => {
    return {
        type: Actions.GET_USER_DETAILS_ERROR,
        payload: {
            error,
        },
    };
};
