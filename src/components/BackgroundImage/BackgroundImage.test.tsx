import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import BackgroundImage from './BackgroundImage';

describe('BackgroundImage', () => {
    it('renders with a background image correctly', () => {
        const wrapper = renderWrapper(<BackgroundImage imageURLExtension="/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg" />);
        expect(wrapper).toMatchSnapshot();
    });
});
