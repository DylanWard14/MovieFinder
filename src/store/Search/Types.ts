export const Actions = {
    SEARCH_REQUEST: 'SEARCH_REQUEST',
    SEARCH_LOADING: 'SEARCH_LOADING',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
};

export type SearchStoreState = {
    searchTerm: string;
    loading: boolean;
    data?: any;
};
