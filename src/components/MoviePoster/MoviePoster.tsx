import React from 'react';
import styled from 'styled-components/macro';

interface MoviePosterProps {
    imageURLExtension: string;
}

const Poster = styled.img.attrs<{url: string}>({
    
})`
    width: 100%;
    height: 100%;
`;

const MoviePoster: React.FunctionComponent<MoviePosterProps> = ({imageURLExtension}) => {
    const fullImageUrl = `https://image.tmdb.org/t/p/original${imageURLExtension}`;
    return <Poster src={fullImageUrl}/>;
}

export default MoviePoster;