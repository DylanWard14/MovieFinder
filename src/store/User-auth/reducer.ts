import { UserAuthState } from './types';
import { Actions } from './types';

const initialState: UserAuthState = {
    loading: false,
    data: undefined,
    error: undefined,
};

export default (state: UserAuthState = initialState, action: any) => {
    switch (action.type) {
        case Actions.GET_LOGIN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        }
        case Actions.GET_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: {
                    authorized: action.payload.response.success,
                },
                error: undefined,
            };
        }
        case Actions.GET_LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                data: undefined,
                error: action.payload.error,
            };
        }
        default: {
            return state;
        }
    }
};
