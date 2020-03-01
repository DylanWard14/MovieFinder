import { SearchStoreState } from './Types';
import { Actions } from './Types';

const initialState: SearchStoreState = {
    searchTerm: '',
    loading: false,
    data: undefined,
};

export default (state: SearchStoreState = initialState, action: any) => {
    switch (action.type) {
        case Actions.SEARCH_LOADING: {
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                loading: true,
            };
        }
        case Actions.SEARCH_SUCCESS: {
            return {
                ...state,
                data: action.payload.response.data.results,
                loading: false,
            };
        }
        default: {
            return state;
        }
    }
};
