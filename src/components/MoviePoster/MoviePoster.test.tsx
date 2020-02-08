import React from 'react';
import { render } from 'enzyme';

import MoviePoster from './MoviePoster';

describe('MoviePoster', () => {
    it('renders the movie poster correctly', () => {
        const wrapper = render(<MoviePoster imageURLExtension="/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" />);
        expect(wrapper).toMatchSnapshot();
    });
});
