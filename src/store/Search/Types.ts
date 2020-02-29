export const Actions = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SEARCH_REQUEST: 'SEARCH_REQUEST',
};

export type SearchStoreState = {
    searchTerm: string;
    loading: boolean;
};
