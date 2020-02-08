import React from 'react';
import { render } from 'enzyme';

import BackgroundImage from './BackgroundImage';

describe('BackgroundImage', () => {
    it('renders with a background image correctly', () => {
        const wrapper = render(<BackgroundImage imageURLExtension="/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg" />);
        expect(wrapper).toMatchSnapshot();
    });
});
