import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import TwoColumnLayout from '../../layouts/TwoColumnLayout/TwoColumnLayout';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MediaDetails from '../../components/MediaDetails/MediaDetails';
import SearchBar from '../../components/SearchBar/SearchBar';
import { ReactComponent as PoweredByMovieDB } from '../../svgs/PoweredByMovieDB.svg';
import { RootState } from '../../store/store';
import { searchRequest } from '../../store/Search/Actions';
import { setMovie } from '../../store/Movie/Actions';

const StyledDiv = styled.div`
    margin-bottom: 1rem;
`;

const StyledSearchbar = styled(SearchBar)`
    position: absolute;
    bottom: 1rem;

    @media (max-width: 750px) {
        position: static;
    }
`;

const HomePage: React.FunctionComponent = props => {
    const searchStore = useSelector((state: RootState) => state.search);
    const movie = useSelector((state: RootState) => state.movie.data);
    const dispatch = useDispatch();
    return (
        <BackgroundImage imageURLExtension={movie?.backdrop_path ?? '/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg'}>
            <StyledDiv>
                <TwoColumnLayout>
                    <PoweredByMovieDB width="150px" height="75px" />
                    <StyledSearchbar
                        searchStore={searchStore}
                        handleSearchSubmit={(searchTerm: string) => dispatch(searchRequest(searchTerm))}
                        handleMovieSelection={(id: number) => {
                            console.log('id', id);
                            dispatch(setMovie(id));
                        }}
                    />
                </TwoColumnLayout>
            </StyledDiv>
            <TwoColumnLayout backgroundColor={'rgba(0, 0, 0, 0.85)'}>
                <MoviePoster imageURLExtension={movie?.poster_path ?? '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg'} />
                <MediaDetails
                    title={movie?.original_title ?? 'Star Wars'}
                    tagLine={movie?.tagline ?? 'A long time ago in a galaxy far, far away...'}
                    overview={
                        movie?.overview ??
                        'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.'
                    }
                    genres={movie?.genres ?? [{ name: 'test' }]}
                    productionCompanies={movie?.production_companies ?? [{ name: 'LucasFilm' }]}
                    release={movie?.release_date ?? '1977-05-25'}
                    runTime={movie?.runtime ?? 12345}
                    boxOffice={movie?.revenue ?? 775398007}
                    averageVote={movie?.vote_average ?? '8.2'}
                />
            </TwoColumnLayout>
        </BackgroundImage>
    );
};

export default HomePage;
