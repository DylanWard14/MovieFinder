import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as PoweredByMovieDB } from '../svgs/PoweredByMovieDB.svg';
import { ReactComponent as GithubMark } from '../svgs/github-mark.svg';
import TwoColumnLayout from '../layouts/TwoColumnLayout/TwoColumnLayout';
import SearchBar from '../components/SearchBar/SearchBar';
import Link from '../components/Link/Link';
import { RootState } from '../store/store';
import { searchRequest } from '../store/Search/actions';

const Header = styled.header`
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
    const searchStore = useSelector((state: RootState) => state.search);
    return (
        <Fragment>
            <Header>
                <TwoColumnLayout>
                    <PoweredByMovieDB width="150px" height="75px" />
                    <StyledSearchbar
                        searchStore={searchStore}
                        handleSearchSubmit={(searchTerm: string) => dispatch(searchRequest(searchTerm))}
                    />
                </TwoColumnLayout>
            </Header>

            {children}

            <Footer>
                <Link href="https://skempin.github.io/reactjs-tmdb-app/">Based on designs by Stephen Kempin</Link>
                <Link href="https://github.com/DylanWard14/MovieFinder" icon={<GithubMark />}>
                    Developed by Dylan Ward
                </Link>
            </Footer>
        </Fragment>
    );
};

export default Page;
