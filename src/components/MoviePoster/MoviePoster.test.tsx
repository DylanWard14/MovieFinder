import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import MoviePoster from './MoviePoster';

describe('MoviePoster', () => {
    it('renders the movie poster correctly', () => {
        const wrapper = renderWrapper(<MoviePoster imageURLExtension="/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" />);
        expect(wrapper).toMatchSnapshot();
    });
});
