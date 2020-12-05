import React from 'react';
import { renderWrapper, mountWrapper } from '../../utils/enzyme/themeWrapper';

import User from './User';

describe('User', () => {
    const handleLogin = jest.fn();
    const setup = (propsOverrides = {}) => {
        const props = {
            userAuth: {
                loading: false,
                data: {
                    authorized: true,
                },
            },
            userDetails: {
                loading: false,
                data: {
                    avatar: {
                        gravatar: {
                            hash: 'abc123',
                        },
                    },
                    id: 123,
                    iso_639_1: '123',
                    iso_3166_1: '123',
                    name: 'Dylan Ward',
                    include_adult: false,
                    username: 'Dward',
                },
            },
            handleLogin: handleLogin,
            ...propsOverrides,
        };

        return {
            rendered: renderWrapper(<User {...props} />),
            mounted: mountWrapper(<User {...props} />),
        };
    };
    describe('snapshot', () => {
        it('renders correctly', () => {
            const { rendered } = setup({});

            expect(rendered).toMatchSnapshot();
        });
    });

    describe('mounted', () => {
        it('renders loading state when userAuth is loading', () => {
            const { mounted } = setup({ userAuth: { loading: true } });

            expect(mounted.find('UserSkeleton').exists()).toBeTruthy();
        });

        it('renders loading state when userDetails is loading', () => {
            const { mounted } = setup({ userDetails: { loading: true } });

            expect(mounted.find('UserSkeleton').exists()).toBeTruthy();
        });

        it('renders loading state when user is authorized but no userDetails data is loading', () => {
            const { mounted } = setup({ userAuth: { data: { authorized: true } }, userDetails: { data: undefined } });

            expect(mounted.find('UserSkeleton').exists()).toBeTruthy();
        });

        it('does not render loading state when the is userAuth and userDetails data', () => {
            const { mounted } = setup();

            expect(mounted.find('UserSkeleton').exists()).toBeFalsy();
        });

        it('renders the Username and avatar correctly', () => {
            const { mounted } = setup();

            expect(mounted.find('p').text()).toBe('Dward');
            expect(mounted.find('img').prop('src')).toBe('https://www.gravatar.com/avatar/abc123');
        });

        it('renders the login button when the user is not authorized and there is no userDetails data', () => {
            const { mounted } = setup({ userAuth: { data: { authorized: false } }, userDetails: { data: undefined } });

            expect(mounted.find('button').exists()).toBeTruthy();
        });

        it('handleLogin is called when button is clicked', () => {
            const { mounted } = setup({ userAuth: { data: { authorized: false } }, userDetails: { data: undefined } });

            expect(handleLogin).toHaveBeenCalledTimes(0);
            mounted.find('button').simulate('click');
            expect(handleLogin).toHaveBeenCalled();
        });
    });
});
