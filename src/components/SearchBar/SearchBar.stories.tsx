import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SearchStoreState } from '../../store/Search/Types';
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
const handleSelection = (id: number) => console.log(`Selected movie with the id ${id}`);

export const DefaultExample = () => (
    <SearchBar searchStore={searchStore} handleSearchSubmit={onSubmit} handleMovieSelection={handleSelection} />
);

export const WithResultsExample = () => (
    <ThemeProvider theme={myTheme}>
        <SearchBar
            searchStore={{
                ...searchStore,
                searchTerm: 'result',
                data: [{ title: 'result1' }, { title: 'result2' }, { title: 'result3' }],
            }}
            handleSearchSubmit={onSubmit}
            handleMovieSelection={handleSelection}
        />
    </ThemeProvider>
);

export const WithNoDataExample = () => (
    <ThemeProvider theme={myTheme}>
        <SearchBar
            searchStore={{ ...searchStore, searchTerm: 'result', data: [] }}
            handleSearchSubmit={onSubmit}
            handleMovieSelection={handleSelection}
        />
    </ThemeProvider>
);
