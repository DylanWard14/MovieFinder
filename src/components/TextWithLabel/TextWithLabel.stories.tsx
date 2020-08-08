import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import styled from 'styled-components/macro';

import TextWithLabel from './TextWithLabel';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: black;
`;

export default {
    title: 'Components/TextWithLabel',
    decorators: [(storyFn: any) => <Wrapper>{storyFn()}</Wrapper>, withKnobs],
};

export const DefaultExample = () => <TextWithLabel label="Label" content="This is some content" />;
export const SmallLabelExample = () => (
    <TextWithLabel label="Label" content="This is some content" labelSize="small" contentSize="large" />
);
export const PropsExample = () => (
    <TextWithLabel
        label={text('label', 'label')}
        content={text('content', 'this is some content')}
        labelSize={select('labelSize', ['small', 'large'], 'large')}
        contentSize={select('contentSize', ['small', 'large'], 'small')}
    />
);
