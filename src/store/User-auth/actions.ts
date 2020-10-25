import axios from 'axios';

import { AppThunk } from '../types';
import { Actions, UserAuthResponse } from './types';

export const getRequestToken = (): AppThunk => {
    return dispatch => {
        dispatch(getLoginRequest());
        axios
            .get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                const { request_token: requestToken } = response.data;
                window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.href}`;
            })
            .catch(error => {
                dispatch(getLoginError(error));
            });
    };
};

export const login = (requestToken?: string): AppThunk => {
    return dispatch => {
        // TODO Should we check that the session ID is still valid?
        if (localStorage.getItem('sessionID')) {
            return dispatch(getLoginSuccess({ success: true, session_id: String(localStorage.getItem('sessionID')) }));
        }

        if (requestToken) {
            dispatch(getLoginRequest());
            return axios
                .post(
                    `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`,
                    {
                        request_token: requestToken,
                    },
                )
                .then(response => {
                    dispatch(getLoginSuccess(response.data));

                    // Store sessionID in local storage so user does not have to logon every time
                    localStorage.setItem('sessionID', response.data['session_id']);
                })
                .catch(error => {
                    dispatch(getLoginError(error));
                });
        }
    };
};

export const getLoginRequest = () => {
    return {
        type: Actions.GET_LOGIN_REQUEST,
    };
};

export const getLoginSuccess = (response: UserAuthResponse) => {
    return {
        type: Actions.GET_LOGIN_SUCCESS,
        payload: {
            response,
        },
    };
};

export const getLoginError = (error: string) => {
    return {
        type: Actions.GET_LOGIN_ERROR,
        payload: {
            error,
        },
    };
};
