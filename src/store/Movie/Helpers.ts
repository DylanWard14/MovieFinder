import { Movie, MovieResponse } from './Types';

import { ProductionCompanyResponse, ProductionCompany, ProductionCountry, ProductionCountryResponse } from '../Types';

export const transformAPIResponse = (data?: MovieResponse): Movie | undefined => {
    if (data) {
        return {
            id: data.id,
            backdropPath: data.backdrop_path,
            budget: data.budget,
            genres: data.genres,
            originalTitle: data.original_title,
            overview: data.overview,
            popularity: data.popularity,
            posterPath: data.poster_path,
            productionCompanies: transformProductionCompaniesResponse(data.production_companies),
            productionCountries: transformProductionCountriesResponse(data.production_countries),
            releaseDate: data.release_date,
            revenue: data.revenue,
            runtime: data.runtime,
            status: data.status,
            tagline: data.tagline,
            title: data.title,
            voteAverage: data.vote_average,
            voteCount: data.vote_count,
        };
    }
    return undefined;
};

export const transformProductionCompaniesResponse = (data?: ProductionCompanyResponse[]): ProductionCompany[] => {
    if (data) {
        return data.map(item => {
            return {
                id: item.id,
                logoPath: item.logo_path,
                name: item.name,
                originCountry: item.origin_country,
            };
        });
    }
    return [];
};

export const transformProductionCountriesResponse = (data?: ProductionCountryResponse[]): ProductionCountry[] => {
    if (data) {
        return data.map(item => {
            return {
                iso: item.iso_3166_1,
                name: item.name,
            };
        });
    }
    return [];
};
