import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const Component = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;

const rotate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const Ring = styled.div`
    margin: auto;
    width: 80px;
    height: 80px;
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${props => props.theme.colors.main};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.colors.main} transparent transparent transparent;
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

// TODO improve loading spinner
const LoadingSpinner: React.FunctionComponent = () => {
    return (
        <Component>
            <Ring>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Ring>
        </Component>
    );
};

export default LoadingSpinner;
