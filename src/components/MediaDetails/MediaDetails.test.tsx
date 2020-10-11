import React from 'react';

import { renderWrapper } from '../../utils/enzyme/themeWrapper';
import MediaDetails from './MediaDetails';

describe('MediaDetails', () => {
    it('renders with a label and content correctly', () => {
        const wrapper = renderWrapper(
            <MediaDetails
                title="Star Wars"
                tagLine="A long time ago in a galaxy far, far away..."
                overview="Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
                genres={[{ name: 'genre1' }, { name: 'genre2' }]}
                productionCompanies={[{ name: 'company1' }, { name: 'company2' }]}
                release="1977-05-25"
                runTime={121}
                boxOffice={775398007}
                averageVote="8.2"
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
