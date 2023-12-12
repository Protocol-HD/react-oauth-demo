import { gql } from '@apollo/client';

export const OAUTH_LOGIN = gql`
    mutation OauthLogin($input: OauthLoginInputDto!) {
        oauthLogin(input: $input) {
            accessToken
            refreshToken
            email
            message
            oauthAccessToken
        }
    }
`;

export const OAUTH_SIGNUP = gql`
    mutation OauthSignup($input: OauthSignupInputDto!) {
        oauthSignup(input: $input) {
            accessToken
            refreshToken
            email
            message
        }
    }
`;