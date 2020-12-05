import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import UserSkeleton from './UserSkeleton';

describe('UserSkeleton', () => {
    describe('snapshot', () => {
        it('renders correctly', () => {
            const rendered = renderWrapper(<UserSkeleton />);

            expect(rendered).toMatchSnapshot();
        });
    });
});
