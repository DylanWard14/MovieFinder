import React from 'react';
import { render } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import myTheme from '../../theme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
    it('renders loading correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <SearchResults searchStore={{ loading: true, searchTerm: 'test' }} setVisible={() => {}} />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with error correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <SearchResults
                    searchStore={{ loading: false, searchTerm: 'test', error: new Error('test error') }}
                    setVisible={() => {}}
                />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with data correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <Router>
                    <SearchResults
                        searchStore={{
                            loading: false,
                            searchTerm: 'test',
                            data: [
                                { title: 'test1', id: 1 },
                                { title: 'test2', id: 2 },
                                { title: 'test3', id: 3 },
                                { title: 'test4', id: 4 },
                                { title: 'test5', id: 5 },
                            ],
                        }}
                        setVisible={() => {}}
                    />
                </Router>
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
