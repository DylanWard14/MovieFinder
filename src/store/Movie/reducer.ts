import { MovieStoreState } from './types';
import { Actions } from './types';
import { transformAPIResponse } from './helpers';

const initialState: MovieStoreState = {
    loading: false,
    data: undefined,
    error: undefined,
};

export default (state: MovieStoreState = initialState, action: any) => {
    switch (action.type) {
        case Actions.SET_MOVIE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        }
        case Actions.SET_MOVIE_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: transformAPIResponse(action.payload.response.data),
                error: undefined,
            };
        }
        case Actions.SET_MOVIE_ERROR: {
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
