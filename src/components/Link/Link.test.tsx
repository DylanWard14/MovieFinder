import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import { ReactComponent as GithubMark } from '../../svgs/github-mark.svg';
import Link from './Link';

// TODO create theme wrapper to auto wrap tests in the ThemeProvider
describe('Link', () => {
    it('renders default correctly', () => {
        const wrapper = renderWrapper(<Link href="www.google.com" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with icon correctly', () => {
        const wrapper = renderWrapper(<Link href="www.google.com" icon={<GithubMark />} />);
        expect(wrapper).toMatchSnapshot();
    });
});
