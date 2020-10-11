import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import LoadingSpiner from './LoadingSpinner';

describe('LoadingSpinner', () => {
    it('renders correctly', () => {
        const wrapper = renderWrapper(<LoadingSpiner />);
        expect(wrapper).toMatchSnapshot();
    });
});
