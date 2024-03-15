import { gql } from '@apollo/client';

export const OAUTH_SIGN_IN = gql`
    mutation OauthSignIn($input: OauthSignInInputDto!) {
        oauthSignIn(input: $input) {
            accessToken
            refreshToken
            email
            message
            oauthAccessToken
        }
    }
`;

export const OAUTH_SIGN_UP = gql`
    mutation OauthSignUp($input: OauthSignUpInputDto!) {
        oauthSignUp(input: $input) {
            accessToken
            refreshToken
            email
            message
        }
    }
`;