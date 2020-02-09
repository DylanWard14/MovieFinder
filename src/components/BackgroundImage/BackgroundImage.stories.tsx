import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import BackgroundImage from './BackgroundImage';

export default {
    title: 'Components/BackgroundImage',
    decorators: [withKnobs],
};

export const DefaultExample = () => <BackgroundImage imageURLExtension="/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg" />;
export const PropsExample = () => (
    <BackgroundImage imageURLExtension={text('URL Extenstion', '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg')} />
);
