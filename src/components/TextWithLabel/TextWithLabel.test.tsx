import React from 'react';
import { render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import myTheme from '../../theme';
import TextWithLabel from './TextWithLabel';

describe('TextWithLabel', () => {
    it('renders with a label and content correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <TextWithLabel label="label" content="content" />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with a label and content and sizes set correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <TextWithLabel label="label" content="content" labelSize="small" contentSize="large" />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
