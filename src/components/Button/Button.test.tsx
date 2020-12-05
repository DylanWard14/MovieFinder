import React from 'react';
import { renderWrapper, mountWrapper } from '../../utils/enzyme/themeWrapper';

import Button from './Button';

describe('Button', () => {
    describe('snapshot', () => {
        it('renders correctly', () => {
            const rendered = renderWrapper(<Button onClick={() => {}}>Test</Button>);

            expect(rendered).toMatchSnapshot();
        });
    });

    describe('mounted', () => {
        it('calls onClick when button is clicked', () => {
            const handleOnClick = jest.fn();
            const mounted = mountWrapper(<Button onClick={handleOnClick}>Test</Button>);

            mounted.find('button').simulate('click');
            expect(handleOnClick).toHaveBeenCalled();
        });
    });
});
