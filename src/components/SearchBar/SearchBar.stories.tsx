import React from 'react';
import styled from 'styled-components/macro';

import { SearchStoreState } from '../../store/Search/types';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: black;
`;

export default {
    title: 'Components/SearchBar',
    decorators: [(storyFn: any) => <Wrapper>{storyFn()}</Wrapper>],
};

const searchStore: SearchStoreState = {
    searchTerm: '',
    data: undefined,
    loading: false,
};

const onSubmit = (searchTerm: string) => console.log(`searching for ${searchTerm}`);

export const DefaultExample = () => <SearchBar searchStore={searchStore} handleSearchSubmit={onSubmit} />;

export const WithResultsExample = () => (
    <SearchBar
        searchStore={{
            ...searchStore,
            searchTerm: 'result',
            data: [{ title: 'result1' }, { title: 'result2' }, { title: 'result3' }],
        }}
        handleSearchSubmit={onSubmit}
    />
);

export const WithNoDataExample = () => (
    <SearchBar searchStore={{ ...searchStore, searchTerm: 'result', data: [] }} handleSearchSubmit={onSubmit} />
);
