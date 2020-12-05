import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const Component = styled.div`
    display: flex;
    align-items: center;
`;

const load = keyframes`
from {
    left: -150px;
}
to   {
    left: 100%;
}
`;

const Avatar = styled.div`
    width: 2rem;
    height: 2rem;
    background: #465c52;
    margin-left: 0.5rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 30%, #009952 50%, transparent 70%);
        animation: ${load} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
`;

const Name = styled.div`
    background: #465c52;
    width: 4rem;
    height: 1rem;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 30%, #009952 50%, transparent 70%);
        animation: ${load} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
`;

const UserSkeleton: React.FunctionComponent = () => {
    return (
        <Component>
            <Name />
            <Avatar />
        </Component>
    );
};

UserSkeleton.displayName = 'UserSkeleton';

export default UserSkeleton;
