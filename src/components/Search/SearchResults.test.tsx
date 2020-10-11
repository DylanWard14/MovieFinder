import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
    it('renders loading correctly', () => {
        const wrapper = renderWrapper(
            <SearchResults searchStore={{ loading: true, searchTerm: 'test' }} setVisible={() => {}} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with error correctly', () => {
        const wrapper = renderWrapper(
            <SearchResults
                searchStore={{ loading: false, searchTerm: 'test', error: new Error('test error') }}
                setVisible={() => {}}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with data correctly', () => {
        const wrapper = renderWrapper(
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
            </Router>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
