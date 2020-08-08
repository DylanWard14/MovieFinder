import React from 'react';
import styled from 'styled-components/macro';

const Component = styled.a`
    color: #ccc;
    fill: #ccc;
    text-decoration: none;
    text-shadow: 1px 1px 1px black;
    font-family: ${props => props.theme.typography.paragraph.fontFamily};
    font-size: 0.9rem;
    display: flex;
    padding: 0.5rem;
    :hover {
        color: ${props => props.theme.colors.main};
        fill: ${props => props.theme.colors.main};
        text-decoration: underline;
    }
    transition: 1s;
`;

const IconWrapper = styled.span`
    width: 1rem;
    display: inline-block;
    padding-right: 0.5rem;
`;

interface LinkProps {
    href: string;
    icon?: React.ReactNode;
}

const Link: React.FunctionComponent<LinkProps> = ({ href, icon, children }) => {
    return (
        <Component href={href} target="__blank">
            <IconWrapper>{icon}</IconWrapper>
            {children}
        </Component>
    );
};

export default Link;
