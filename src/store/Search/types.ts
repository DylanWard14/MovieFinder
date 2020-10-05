export const Actions = {
    SEARCH_REQUEST: 'SEARCH_REQUEST',
    SEARCH_LOADING: 'SEARCH_LOADING',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
    SEARCH_ERROR: 'SEARCH_ERROR',
};

export type SearchStoreState = {
    searchTerm: string;
    loading: boolean;
    data?: SearchResult[];
    error?: Error;
};

export type SearchResult = {
    popularity: number;
    voteCount: number;
    video: boolean;
    posterPath: string;
    id: number;
    adult: boolean;
    backdropPath: string;
    originalLanguage: string;
    originalTitle: string;
    genreIds: number[];
    title: string;
    voteAverage: number;
    overview: string;
    releaseDate: string;
};

export type SearchResponse = {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}[];
