import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import TextWithLabel from './TextWithLabel';

describe('TextWithLabel', () => {
    it('renders with a label and content correctly', () => {
        const wrapper = renderWrapper(<TextWithLabel label="label" content="content" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with a label and content and sizes set correctly', () => {
        const wrapper = renderWrapper(
            <TextWithLabel label="label" content="content" labelSize="small" contentSize="large" />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
