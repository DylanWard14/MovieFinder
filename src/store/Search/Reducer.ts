import { SearchStoreState } from './Types';
import { Actions } from './Types';

const initialState: SearchStoreState = {
    searchTerm: '',
    loading: false,
};

export default (state: SearchStoreState = initialState, action: any) => {
    switch (action.type) {
        case Actions.SET_SEARCH_TERM: {
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
            };
        }
        case Actions.SEARCH_REQUEST: {
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                loading: true,
            };
        }
        default: {
            return state;
        }
    }
};
