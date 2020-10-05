import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Results = styled.ul`
    width: 100%;
    background: black;
    z-index: 100;
    list-style-type: none;
    padding: 0;
    margin: 0.5rem 0;
    position: absolute;
    color: ${props => props.theme.colors.secondary};
`;

const Result = styled(Link)`
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: inherit;
    font-size: 1.125rem;

    :hover,
    :focus {
        background: ${props => props.theme.colors.main};
        color: black;
        cursor: pointer;
    }
`;

const NoData = styled.li`
    padding: 0.5rem 1rem;
    font-size: 1.125rem;
`;

const SearchError = styled.p`
    padding: 0.5rem 1rem;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.error};
`;

interface SearchResultsProps {
    searchStore: {
        loading: boolean;
        searchTerm: string;
        data?: {
            title: string;
            id: number;
        }[];
        error?: Error;
    };
    setVisible: (visible: boolean) => void;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({ searchStore, setVisible }) => {
    if (searchStore.loading) {
        return <LoadingSpinner />;
    }
    if (searchStore.error) {
        return <SearchError>An error occurred, please try again later.</SearchError>;
    }
    return (
        <Results id="search_results">
            {searchStore?.data?.length
                ? searchStore.data.map((item, index) => {
                      return (
                          <li tabIndex={0} key={`${item.title}_search_result_${index}`}>
                              <Result to={`/${item.id}`} onClick={() => setVisible(false)}>
                                  {item.title}
                              </Result>
                          </li>
                      );
                  })
                : searchStore.searchTerm && <NoData>No results found...</NoData>}
        </Results>
    );
};

export default SearchResults;
