import React from 'react';
import styled from 'styled-components/macro';

import TextWithLabel from '../TextWithLabel/TextWithLabel';
import formatNumberAsThousands from '../../helpers/formatNumberAsThousands';

const Component = styled.div`
    padding: 1rem 1.5rem;
`;

const Title = styled.h1`
    text-transform: uppercase;
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.colors.secondary};
`;

const TagLine = styled.p`
    ${props => props.theme.typography.largeLabel}
`;

const Overview = styled.p`
    ${props => props.theme.typography.paragraph}
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
`;

const Stats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 4rem;
`;

const StyledTextWithLabel = styled(TextWithLabel)`
    width: 10rem;
`;

interface MediaDetailsProps {
    title: string;
    tagLine: string;
    overview: string;
    genres?: { name: string }[];
    productionCompanies?: { name: string }[];
    release: string;
    runTime: number;
    boxOffice: number;
    averageVote: string;
}

const MediaDetails: React.FunctionComponent<MediaDetailsProps> = ({
    title,
    tagLine,
    overview,
    genres = [],
    productionCompanies = [],
    release,
    runTime,
    boxOffice,
    averageVote,
}) => {
    return (
        <Component>
            <Title id="movie-title">{title}</Title>
            <TagLine>{tagLine}</TagLine>
            <Overview>{overview}</Overview>
            <TextWithLabel
                label={genres?.reduce<string>((acc, item) => {
                    if (acc === '') {
                        return item.name;
                    }
                    return `${acc}, ${item.name}`;
                }, '')}
                content={productionCompanies.reduce<string>((acc, item) => {
                    if (acc === '') {
                        return item.name;
                    }
                    return `${acc}, ${item.name}`;
                }, '')}
            />
            <Stats>
                <StyledTextWithLabel label="Orignal Release:" content={release} labelSize="small" contentSize="large" />
                <StyledTextWithLabel
                    label="Running Time:"
                    content={`${runTime} mins`}
                    labelSize="small"
                    contentSize="large"
                />
            </Stats>
            <Stats>
                <StyledTextWithLabel
                    label="Box Office:"
                    content={`$${formatNumberAsThousands(boxOffice)}`}
                    labelSize="small"
                    contentSize="large"
                />
                <StyledTextWithLabel
                    label="Vote Average:"
                    content={`${averageVote} / 10`}
                    labelSize="small"
                    contentSize="large"
                />
            </Stats>
        </Component>
    );
};

export default MediaDetails;
