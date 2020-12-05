import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useMount } from 'react-use';

import { ReactComponent as PoweredByMovieDB } from '../svgs/PoweredByMovieDB.svg';
import { ReactComponent as GithubMark } from '../svgs/github-mark.svg';
import TwoColumnLayout from '../layouts/TwoColumnLayout/TwoColumnLayout';
import SearchBar from '../components/Search/SearchBar';
import Link from '../components/Link/Link';
import Header from '../components/Header/Header';
import { RootState } from '../store/store';
import { searchRequest } from '../store/Search/actions';
import { login, getRequestToken } from '../store/User-auth/actions';

const Component = styled.div<{ backgroundUrl?: string }>`
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 1)
        ),
        url(${props => props.backgroundUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const Section = styled.div`
    padding: 1rem 0;
`;

const StyledSearchbar = styled(SearchBar)`
    position: absolute;
    bottom: 1rem;

    @media (max-width: 750px) {
        position: static;
    }
`;

const Footer = styled.footer`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Page: React.FunctionComponent = ({ children }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    useMount(() => {
        const query = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(login(query['request_token'] as string));
    });

    const searchStore = useSelector((state: RootState) => state.search);
    const user = useSelector((state: RootState) => state.user);
    const movie = useSelector((state: RootState) => state.movie.data);

    return (
        <Component backgroundUrl={`https://image.tmdb.org/t/p/original${movie?.backdropPath}`}>
            <Header userAuth={user.auth} userDetails={user.details} login={() => dispatch(getRequestToken())} />
            <Section>
                <TwoColumnLayout>
                    <PoweredByMovieDB width="150px" height="75px" />
                    <StyledSearchbar
                        searchStore={searchStore}
                        handleSearchSubmit={(searchTerm: string) => dispatch(searchRequest(searchTerm))}
                    />
                </TwoColumnLayout>
            </Section>

            {children}

            <Footer>
                <Link href="https://skempin.github.io/reactjs-tmdb-app/">Based on designs by Stephen Kempin</Link>
                <Link href="https://github.com/DylanWard14/MovieFinder" icon={<GithubMark />}>
                    Developed by Dylan Ward
                </Link>
            </Footer>
        </Component>
    );
};

export default Page;
