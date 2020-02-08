import React from 'react';
import { render } from 'enzyme';

import CenterLayout from './CenterLayout';

describe('CenterLayout', () => {
    it('renders default correctly', () => {
        const wrapper = render(
            <CenterLayout>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut pulvinar.
                        Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel tortor feugiat
                        egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula vitae imperdiet.
                    </p>
                </div>
            </CenterLayout>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
