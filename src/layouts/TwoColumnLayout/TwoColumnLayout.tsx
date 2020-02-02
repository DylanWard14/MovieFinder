import React from 'react';
import styled from 'styled-components/macro';

interface TwoColumnLayoutProps {
    leftColumn: React.ReactNode | React.ReactNode[];
    rightColumn: React.ReactNode | React.ReactNode[];
}

const Column = styled.div<{width: number}>`
    width: ${props => props.width}%;
    display: inline-block;
    float: left;
`;

const TwoColumnLayout: React.FunctionComponent<TwoColumnLayoutProps> = ({leftColumn, rightColumn}) => {
    return (
        <div>
            <Column width={45}>
                {leftColumn}
            </Column>
            <Column width={55}>
                {rightColumn}
            </Column>
        </div>
    )
};

export default TwoColumnLayout;