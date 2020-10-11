import React from 'react';

import { mountWrapper, renderWrapper } from '../../utils/enzyme/themeWrapper';
import SearchBar from './SearchBar';

jest.mock('popper.js', () => {
    const PopperJS = jest.requireActual('popper.js');
    class Popper {
        static placements = PopperJS.placements;
        constructor() {
            return {
                destroy: () => {},
                scheduleUpdate: () => {},
                placements: null,
            };
        }
    }
    return Popper;
});

describe('SearchBar', () => {
    const searchStore = {
        loading: false,
        searchTerm: '',
        data: undefined,
        error: undefined,
    };
    const searchSubmit = jest.fn();
    it('renders correctly', () => {
        const wrapper = renderWrapper(<SearchBar searchStore={searchStore} handleSearchSubmit={searchSubmit} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('handleSearchSubmit is not called if there is no search term', () => {
        const wrapper = mountWrapper(<SearchBar searchStore={searchStore} handleSearchSubmit={searchSubmit} />);
        wrapper.find('search-form').simulate('submit');
        expect(searchSubmit).toHaveBeenCalledTimes(0);
    });

    it('handleSearchSubmit is called with the searchTerm', () => {
        const wrapper = mountWrapper(
            <SearchBar searchStore={{ ...searchStore, searchTerm: 'testTerm' }} handleSearchSubmit={searchSubmit} />,
        );
        wrapper.find('search-form').simulate('submit');
        expect(searchSubmit).toHaveBeenCalledTimes(1);
        expect(searchSubmit).toHaveBeenCalledWith('testTerm');
    });
});
