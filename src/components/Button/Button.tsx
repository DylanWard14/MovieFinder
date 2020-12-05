import React from 'react';
import styled from 'styled-components/macro';
import { darken } from 'polished';

const StyledButton = styled.button`
    background: black;
    border: 1px solid ${props => props.theme.colors.main};
    border-radius: 5px;
    height: 2rem;
    min-width: 4rem;
    color: white;
    margin: 0 1rem;
    font-family: lato;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors.main};
        color: black;
    }
    &:active {
        border-color: ${props => darken(0.1, props.theme.colors.main)};
        background: ${props => darken(0.1, props.theme.colors.main)};
    }
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FunctionComponent<ButtonProps> = ({ children, ...restProps }) => {
    return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default Button;
