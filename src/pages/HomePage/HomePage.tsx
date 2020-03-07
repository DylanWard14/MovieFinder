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
    const dispatch = useDispatch();
    return (
        <BackgroundImage imageURLExtension="/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg">
            <StyledDiv>
                <TwoColumnLayout>
                    <PoweredByMovieDB width="150px" height="75px" />
                    <StyledSearchbar
                        searchStore={searchStore}
                        handleSearchSubmit={(searchTerm: string) => dispatch(searchRequest(searchTerm))}
                    />
                </TwoColumnLayout>
            </StyledDiv>
            <TwoColumnLayout backgroundColor={'rgba(0, 0, 0, 0.85)'}>
                <MoviePoster imageURLExtension="/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" />
                <MediaDetails
                    title="Star Wars"
                    tagLine="A long time ago in a galaxy far, far away..."
                    overview="Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
                    genre="Adventure, Action, Science Fiction"
                    productionCompany="Lucasfilm, 20th Century Fox"
                    release="1977-05-25"
                    runTime="121 mins"
                    boxOffice="$775,398,007"
                    averageVote="8.2 / 10"
                />
            </TwoColumnLayout>
        </BackgroundImage>
    );
};

export default HomePage;
