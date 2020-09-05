import { Actions, SearchStoreState } from './types';
import { transformAPIResponse } from './helpers';

const initialState: SearchStoreState = {
    searchTerm: '',
    loading: false,
    data: undefined,
    error: undefined,
};

// TODO strictly type actions
export default (state: SearchStoreState = initialState, action: any) => {
    switch (action.type) {
        case Actions.SEARCH_REQUEST: {
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                loading: true,
            };
        }
        case Actions.SEARCH_SUCCESS: {
            return {
                ...state,
                data: transformAPIResponse(action.payload.response.data.results),
                loading: false,
            };
        }
        case Actions.SEARCH_ERROR: {
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
