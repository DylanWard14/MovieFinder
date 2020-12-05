import React from 'react';
import { renderWrapper } from '../../utils/enzyme/themeWrapper';

import Header from './Header';

describe('Header', () => {
    const login = jest.fn();
    const setup = (propsOverrides = {}) => {
        const props = {
            userAuth: {
                loading: false,
                data: undefined,
            },
            userDetails: {
                loading: false,
                data: undefined,
            },
            login: login,
            ...propsOverrides,
        };

        return {
            rendered: renderWrapper(<Header {...props} />),
        };
    };
    describe('snapshot', () => {
        it('renders correctly', () => {
            const { rendered } = setup();

            expect(rendered).toMatchSnapshot();
        });
    });
});
