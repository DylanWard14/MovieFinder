import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import TwoColumnLayout from '../../layouts/TwoColumnLayout/TwoColumnLayout';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MediaDetails from '../../components/MediaDetails/MediaDetails';
import SearchBar from '../../components/SearchBar/SearchBar';
import Link from '../../components/Link/Link';
import { ReactComponent as PoweredByMovieDB } from '../../svgs/PoweredByMovieDB.svg';
import { ReactComponent as GithubMark } from '../../svgs/github-mark.svg';
import { RootState } from '../../store/store';
import { searchRequest } from '../../store/Search/actions';
import { setMovie } from '../../store/Movie/actions';

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

const Footer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomePage: React.FunctionComponent = props => {
    const dispatch = useDispatch();
    const params: { movieId?: string } = useParams();

    React.useEffect(() => {
        if (params?.movieId) {
            dispatch(setMovie(Number(params.movieId)));
        }
    }, [params.movieId, dispatch, params]);

    const searchStore = useSelector((state: RootState) => state.search);
    const movie = useSelector((state: RootState) => state.movie.data);

    if (!params?.movieId) {
        return <Redirect to="/11" />;
    }

    if (movie) {
        return (
            <BackgroundImage imageURLExtension={movie?.backdropPath}>
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
                    <MoviePoster imageURLExtension={movie?.posterPath} />
                    <MediaDetails
                        title={movie?.originalTitle}
                        tagLine={movie?.tagline}
                        overview={movie?.overview}
                        genres={movie?.genres}
                        productionCompanies={movie?.productionCompanies}
                        release={movie?.releaseDate}
                        runTime={movie?.runtime}
                        boxOffice={movie?.revenue}
                        averageVote={movie?.voteAverage}
                    />
                </TwoColumnLayout>
                <Footer>
                    <Link href="https://skempin.github.io/reactjs-tmdb-app/">Based on designs by Stephen Kempin</Link>
                    <Link href="https://github.com/DylanWard14/MovieFinder" icon={<GithubMark />}>
                        Developed by Dylan Ward
                    </Link>
                </Footer>
            </BackgroundImage>
        );
    }

    return null;
};

export default HomePage;
