export const Actions = {
    GET_USER_DETAILS_REQUEST: 'GET_USER_DETAILS_REQUEST',
    GET_USER_DETAILS_SUCCESS: 'GET_USER_DETAILS_SUCCESS',
    GET_USER_DETAILS_ERROR: 'GET_USER_DETAILS_ERROR',
};

export type UserDetailsState = {
    loading: boolean;
    data?: UserDetails;
    error?: string;
};

export type UserDetails = UserDetailsResponse;

export type UserDetailsResponse = {
    avatar: {
        gravatar: {
            hash: string;
        };
    };
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
};
