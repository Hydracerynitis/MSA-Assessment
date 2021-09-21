import { gql } from "@apollo/client";
import * as fragments from "./Fragments";

export const SELF = gql`
    query Self {
        self {
            ...appuserFields
        }
    }
    ${fragments.APPUSER}
`
export const ENTRY = gql`
    query entry($id: ID!) {
        entry(id: $id){
            ...entryFields
            destination{
                ...destinationFields
            }
            appUser{
                entries{
                    dayArrive
                }
            }
        }
    }
    ${fragments.ENTRY}
    ${fragments.DESTINATION}
`
export const ENTRY_USER = gql`
    query entriesByUser{
        entriesByUser{
            ...entryFields
            destination{
                ...destinationFields
            }
        }
    }
    ${fragments.ENTRY}
    ${fragments.DESTINATION}
`