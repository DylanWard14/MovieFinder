import React from 'react';
import { render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import myTheme from '../../theme';
import { ReactComponent as GithubMark } from '../../svgs/github-mark.svg';
import Link from './Link';

// TODO create theme wrapper to auto wrap tests in the ThemeProvider
describe('Link', () => {
    it('renders default correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <Link href="www.google.com" />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with icon correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <Link href="www.google.com" icon={<GithubMark />} />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
