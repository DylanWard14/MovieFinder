import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundImageProps {
    imageURLExtension: string;
    children?: React.ReactNode | React.ReactNode[];
}

const Image = styled.div<{ url: string }>`
    height: 100vh;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 1)
        ),
        url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;

    padding: 1rem;
`;

const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({ imageURLExtension, children }) => {
    const FullImageUrl = `https://image.tmdb.org/t/p/original${imageURLExtension}`;

    return <Image url={FullImageUrl}>{children}</Image>;
};

export default BackgroundImage;
