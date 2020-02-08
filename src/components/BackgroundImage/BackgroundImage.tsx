import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundImageProps {
    imageURLExtension: string;
    children?: React.ReactNode | React.ReactNode[];
}

const Image = styled.div<{ url: string }>`
    height: 100vh;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;

    padding: 1rem;
`;

const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({ imageURLExtension, children }) => {
    const FullImageUrl = `https://image.tmdb.org/t/p/original${imageURLExtension}`;

    console.log(FullImageUrl);

    return <Image url={FullImageUrl}>{children}</Image>;
};

export default BackgroundImage;
