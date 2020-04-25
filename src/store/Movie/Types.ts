export const Actions = {
    SET_MOVIE_REQUEST: 'SET_MOVIE_REQUEST',
    SET_MOVIE_SUCCESS: 'SET_MOVIE_SUCCESS',
    SET_MOVIE_ERROR: 'SET_MOVIE_ERROR',
};

export type MovieStoreState = {
    loading: boolean;
    data?: any;
    error?: string;
};
