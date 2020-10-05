import React from 'react';
import { render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import myTheme from '../../theme';
import LoadingSpiner from './LoadingSpinner';

describe('LoadingSpinner', () => {
    it('renders correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <LoadingSpiner />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
