import { UserDetailsState } from './types';
import { Actions } from './types';

const initialState: UserDetailsState = {
    loading: false,
    data: undefined,
    error: undefined,
};

export default (state: UserDetailsState = initialState, action: any) => {
    switch (action.type) {
        case Actions.GET_USER_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        }
        case Actions.GET_USER_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload.response.data,
                error: undefined,
            };
        }
        case Actions.GET_USER_DETAILS_ERROR: {
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
