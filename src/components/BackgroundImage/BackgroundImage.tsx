import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundImageProps {
    imageURLExtension: string;
}

const Image = styled.div<{url: string}>`
    height: 100vh;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({imageURLExtension}) => {
    const FullImageUrl = `https://image.tmdb.org/t/p/original${imageURLExtension}`;
    console.log(FullImageUrl);
    return <Image url={FullImageUrl}></Image>
}

export default BackgroundImage;