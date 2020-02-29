import { Actions } from './Types';

export const setSearchTerm = (searchTerm: string) => {
    return {
        type: Actions.SET_SEARCH_TERM,
        payload: {
            searchTerm,
        },
    };
};

export const searchRequest = (searchTerm: string) => {
    return {
        type: Actions.SEARCH_REQUEST,
        payload: {
            searchTerm,
        },
    };
};
