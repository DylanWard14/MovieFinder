import React from 'react';
import { render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import myTheme from '../../theme';
import MediaDetails from './MediaDetails';

describe('TextWithLabel', () => {
    it('renders with a label and content correctly', () => {
        const wrapper = render(
            <ThemeProvider theme={myTheme}>
                <MediaDetails
                    title="Star Wars"
                    tagLine="A long time ago in a galaxy far, far away..."
                    overview="Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
                    genre="Adventure, Action, Science Fiction"
                    productionCompany="Lucasfilm, 20th Century Fox"
                    release="1977-05-25"
                    runTime="121 mins"
                    boxOffice="$775,398,007"
                    averageVote="8.2 / 10"
                />
            </ThemeProvider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});