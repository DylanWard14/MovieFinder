export const Actions = {
    GET_LOGIN_REQUEST: 'GET_LOGIN_REQUEST',
    GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS',
    GET_LOGIN_ERROR: 'GET_LOGIN_ERROR',
};

export type UserAuthState = {
    loading: boolean;
    data?: UserAuth;
    error?: string;
};

export type UserAuth = {
    authorized: boolean;
};

export type UserAuthResponse = {
    success: boolean;
    session_id: string;
};
