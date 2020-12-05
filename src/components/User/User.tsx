import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

import { UserAuthState } from '../../store/User-auth/types';
import { UserDetailsState } from '../../store/User-details/types';
import UserSkeleton from '../../skeletons/UserSkeleton/UserSkeleton';
import Button from '../Button/Button';

const Avatar = styled.img`
    width: 2rem;
    height: 2rem;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-left: 0.5rem;
    vertical-align: middle;
`;

const Username = styled.p`
    display: inline-block;
    margin: 0;
`;

export interface UserProps {
    userAuth: UserAuthState;
    userDetails: UserDetailsState;
    handleLogin: () => void;
}

const User: React.FunctionComponent<UserProps> = ({ userAuth, userDetails, handleLogin }) => {
    if (userAuth.loading || userDetails.loading || (userAuth.data?.authorized && !userDetails.data)) {
        return <UserSkeleton />;
    }
    if (!userAuth.data?.authorized || !userDetails.data) {
        return <Button onClick={handleLogin}>Login</Button>;
    }
    return (
        <Fragment>
            <Username>{userDetails.data.username}</Username>
            <Avatar src={`https://www.gravatar.com/avatar/${userDetails.data.avatar.gravatar.hash}`} />
        </Fragment>
    );
};

export default User;
