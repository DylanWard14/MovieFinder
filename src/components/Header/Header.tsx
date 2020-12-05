import React from 'react';
import styled from 'styled-components/macro';

import User from '../User/User';
import { UserDetailsState } from '../../store/User-details/types';
import { UserAuthState } from '../../store/User-auth/types';

const Component = styled.header`
    height: 2rem;
    color: white;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Heading = styled.h1`
    margin: 0;
    background: linear-gradient(45deg, ${props => props.theme.colors.main}, ${props => props.theme.colors.blue});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    user-select: none;

    &::after,
    &::before {
        width: 100%;
        height: 0.25rem;
        background: linear-gradient(45deg, ${props => props.theme.colors.main}, ${props => props.theme.colors.blue});
        content: '';
        display: block;
        border-radius: 5px;
    }
`;

export interface HeaderProps {
    userAuth: UserAuthState;
    userDetails: UserDetailsState;
    login: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ userAuth, userDetails, login }) => {
    return (
        <Component>
            <div>
                <Heading>Movie Finder</Heading>
            </div>
            <div>
                <User userAuth={userAuth} userDetails={userDetails} handleLogin={login} />
            </div>
        </Component>
    );
};

export default Header;
