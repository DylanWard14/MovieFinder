import { SearchResult, SearchResponse } from './types';

export const transformAPIResponse = (data?: SearchResponse): SearchResult[] => {
    if (data) {
        return data.map(item => ({
            popularity: item.popularity,
            voteCount: item.vote_count,
            video: item.video,
            posterPath: item.poster_path,
            id: item.id,
            adult: item.adult,
            backdropPath: item.backdrop_path,
            originalLanguage: item.original_language,
            originalTitle: item.original_title,
            genreIds: item.genre_ids,
            title: item.title,
            voteAverage: item.vote_average,
            overview: item.overview,
            releaseDate: item.release_date,
        }));
    }
    return [];
};
