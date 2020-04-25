import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import styled from 'styled-components/macro';

import MediaDetails from './MediaDetails';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: black;
`;

export default {
    title: 'Components/MediaDetails',
    decorators: [withKnobs],
};

export const DefaultExample = () => (
    <Wrapper>
        <MediaDetails
            title="Star Wars"
            tagLine="A long time ago in a galaxy far, far away..."
            overview="Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
            genres={[{ name: 'test' }]}
            productionCompanies={[{ name: 'test' }]}
            release="1977-05-25"
            runTime={121}
            boxOffice={7752345}
            averageVote="8.2 / 10"
        />
    </Wrapper>
);

export const PropsExample = () => (
    <Wrapper>
        <MediaDetails
            title={text('Title', 'Movie Title')}
            tagLine={text('Tagline', 'Movie Tagline')}
            overview={text('Overview', 'Movie Overview')}
            genres={[{ name: 'test' }]}
            productionCompanies={[{ name: 'test' }]}
            release={text('Release', 'Movie Release Date')}
            runTime={number('Runtime', 123)}
            boxOffice={number('Box Office', 5423667)}
            averageVote={text('Average Vote', 'Movie Average Vote')}
        />
    </Wrapper>
);
