import {
    Genre,
    ProductionCompanyResponse,
    ProductionCompany,
    ProductionCountry,
    ProductionCountryResponse,
} from '../types';

export const Actions = {
    SET_MOVIE_REQUEST: 'SET_MOVIE_REQUEST',
    SET_MOVIE_SUCCESS: 'SET_MOVIE_SUCCESS',
    SET_MOVIE_ERROR: 'SET_MOVIE_ERROR',
};

export type MovieStoreState = {
    loading: boolean;
    data?: Movie;
    error?: string;
};

export type Movie = {
    id: number;
    backdropPath: string;
    budget: number;
    genres: Genre[];
    originalTitle: string;
    overview: string;
    popularity: string;
    posterPath: string;
    productionCompanies: ProductionCompany[];
    productionCountries: ProductionCountry[];
    releaseDate: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    voteAverage: string;
    voteCount: string;
};

export type MovieResponse = {
    id: number;
    backdrop_path: string;
    budget: number;
    genres: Genre[];
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    production_companies: ProductionCompanyResponse[];
    production_countries: ProductionCountryResponse[];
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    vote_average: string;
    vote_count: string;
};
