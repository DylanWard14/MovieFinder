import React from 'react';
import styled from 'styled-components/macro';

interface TwoColumnLayoutProps {
    children: [React.ReactNode | React.ReactNode[], React.ReactNode | React.ReactNode[]];
}

const Column = styled.div<{ width: number }>`
    width: ${props => props.width}%;
    display: inline-block;
    float: left;
`;

const TwoColumnLayout: React.FunctionComponent<TwoColumnLayoutProps> = ({ children }) => {
    return (
        <div>
            {children.map((child, index) => {
                return (
                    <Column key={`TwoColumnLayoutColumn${index}`} width={index === 0 ? 45 : 55}>
                        {child}
                    </Column>
                );
            })}
        </div>
    );
};

export default TwoColumnLayout;
