import React from 'react';
import { render } from 'enzyme';

import TwoColumnLayout from './TwoColumnLayout';

describe('TwoColumnLayout', () => {
    it('renders with single children correctly', () => {
        const wrapper = render(
            <TwoColumnLayout
                leftColumn={
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut pulvinar.
                        Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel tortor feugiat
                        egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula vitae imperdiet.
                        Vestibulum porta tempor molestie. Quisque eget congue erat. Quisque lorem sapien, sollicitudin
                        eu lacinia vel, eleifend commodo ligula. Curabitur sed ullamcorper risus. Donec et lacus et
                        justo iaculis varius. In neque arcu, sodales eu ligula at, viverra ultricies neque. Duis
                        consectetur vulputate dui et blandit. In at eros dui. Pellentesque luctus elit quis tellus
                        facilisis, non iaculis elit placerat. Donec et magna quam. Nulla in metus sit amet neque rhoncus
                        tincidunt ut egestas erat.
                    </p>
                }
                rightColumn={
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut pulvinar.
                        Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel tortor feugiat
                        egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula vitae imperdiet.
                        Vestibulum porta tempor molestie. Quisque eget congue erat. Quisque lorem sapien, sollicitudin
                        eu lacinia vel, eleifend commodo ligula. Curabitur sed ullamcorper risus. Donec et lacus et
                        justo iaculis varius. In neque arcu, sodales eu ligula at, viverra ultricies neque. Duis
                        consectetur vulputate dui et blandit. In at eros dui. Pellentesque luctus elit quis tellus
                        facilisis, non iaculis elit placerat. Donec et magna quam. Nulla in metus sit amet neque rhoncus
                        tincidunt ut egestas erat.
                    </p>
                }
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with multiple children correctly', () => {
        const wrapper = render(
            <TwoColumnLayout
                leftColumn={
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut
                            pulvinar. Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel
                            tortor feugiat egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula
                            vitae imperdiet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut
                            pulvinar. Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel
                            tortor feugiat egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula
                            vitae imperdiet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut
                            pulvinar. Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel
                            tortor feugiat egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula
                            vitae imperdiet.
                        </p>
                    </div>
                }
                rightColumn={
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut
                            pulvinar. Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel
                            tortor feugiat egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula
                            vitae imperdiet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut
                            pulvinar. Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel
                            tortor feugiat egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula
                            vitae imperdiet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium interdum ex ut
                            pulvinar. Ut semper turpis tortor, porta euismod diam mattis ac. Etiam finibus libero vel
                            tortor feugiat egestas. Morbi aliquet dictum condimentum. Suspendisse lobortis tempor ligula
                            vitae imperdiet.
                        </p>
                    </div>
                }
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});