import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundImageProps {
    imageURLExtension: string;
}

const Image = styled.div<{ url: string }>`
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
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
`;

const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({ imageURLExtension }) => {
    const FullImageUrl = `https://image.tmdb.org/t/p/original${imageURLExtension}`;

    return <Image url={FullImageUrl} />;
};

export default BackgroundImage;
