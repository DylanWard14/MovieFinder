import React from 'react';
import styled from 'styled-components/macro';

const Component = styled.div<{ backgroundColor?: string }>`
    background: ${props => props.backgroundColor};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    color: white;
    width: 60rem;
    margin: 0 auto;

    @media (max-width: 1250px) {
        width: 55rem;
    }

    @media (max-width: 1000px) {
        width: 45rem;
    }

    @media (max-width: 750px) {
        flex-direction: column-reverse;
        width: 100%;
        max-width: 34.375rem;
        > div {
            width: 100%;
        }
    }
`;

const Column = styled.div<{ width: number }>`
    width: ${props => props.width}%;
    position: relative;
`;

interface TwoColumnLayoutProps {
    children: [React.ReactNode | React.ReactNode[], React.ReactNode | React.ReactNode[]];
    backgroundColor?: string;
}
const TwoColumnLayout: React.FunctionComponent<TwoColumnLayoutProps> = ({ children, backgroundColor }) => {
    return (
        <Component backgroundColor={backgroundColor}>
            {children.map((child, index) => {
                return (
                    <Column key={`TwoColumnLayoutColumn${index}`} width={index === 0 ? 40 : 60}>
                        {child}
                    </Column>
                );
            })}
        </Component>
    );
};

export default TwoColumnLayout;
