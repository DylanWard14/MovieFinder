import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SearchStoreState } from '../../store/Search/types';
import myTheme from '../../theme';

import SearchBar from './SearchBar';

export default {
    title: 'Components/SearchBar',
};

const searchStore: SearchStoreState = {
    searchTerm: '',
    data: undefined,
    loading: false,
};

const onSubmit = (searchTerm: string) => console.log(`searching for ${searchTerm}`);

export const DefaultExample = () => <SearchBar searchStore={searchStore} handleSearchSubmit={onSubmit} />;

export const WithResultsExample = () => (
    <ThemeProvider theme={myTheme}>
        <SearchBar
            searchStore={{
                ...searchStore,
                searchTerm: 'result',
                data: [{ title: 'result1' }, { title: 'result2' }, { title: 'result3' }],
            }}
            handleSearchSubmit={onSubmit}
        />
    </ThemeProvider>
);

export const WithNoDataExample = () => (
    <ThemeProvider theme={myTheme}>
        <SearchBar searchStore={{ ...searchStore, searchTerm: 'result', data: [] }} handleSearchSubmit={onSubmit} />
    </ThemeProvider>
);
