import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import MoviePoster from './MoviePoster';

export default {
    title: 'Components/MoviePoster',
    decorators: [withKnobs],
};

export const DefaultExample = () => <MoviePoster imageURLExtension="/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" />;

export const PropsExample = () => (
    <MoviePoster imageURLExtension={text('URL Extenstion', '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg')} />
);
