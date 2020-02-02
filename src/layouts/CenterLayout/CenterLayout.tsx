import React from 'react';
import styled from 'styled-components/macro';

interface CenterLayoutProps {
    children: React.ReactNode;
}

const Component = styled.div`
    width: 50vw;
    margin: 0 auto;
`;

const CenterLayout: React.FunctionComponent<CenterLayoutProps> = ({children}) => {
    return (
        <Component>
            {children}
        </Component>
    );
}

export default CenterLayout;