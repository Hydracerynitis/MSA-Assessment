import { gql } from "@apollo/client";

export const APPUSER = gql`
    fragment appuserFields on AppUser {
        id
        name
        github
        imgUrl
        state
    }
`;

export const DESTINATION = gql`
    fragment destinationFields on Destination {
        id
        name
        address
        interest
    }
`;

export const ENTRY = gql`
    fragment entryFields on Entry {
        id
        dayArrive
        dayLeave
    }
`;
export const LOGINPAYLOAD=gql`
    fragment payloadFields on LoginPayload{
        appUser {
            ...appuserFields
        }
        jwt
    }
    ${APPUSER}
`

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;
