import { gql } from "@apollo/client";
import * as fragments from "./Fragments";

export const APPUSERS = gql`
    query appUsers($first: Int, $after: String, $last: Int, $before: String) {
        appUsers(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...appuserFields
            }
        }
    }
    ${fragments.PAGE_INFO}
    ${fragments.APPUSER}
`
export const APPUSER  = gql`
    query appUser($id: ID!) {
        appUser(id: $id) {
            ...appuserFields
        }
    }
    ${fragments.APPUSER}
`
export const SELF = gql`
    query Self {
        self {
            ...appuserFields
        }
    }
    ${fragments.APPUSER}
`
export const DESTINATIONS = gql`
    query destinations($first: Int, $after: String, $last: Int, $before: String) {
        destinations(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...destinationFields
            }
        }
    }
    ${fragments.DESTINATION}
    ${fragments.PAGE_INFO}
`
export const DESTINATION = gql`
    query destination($id: ID!) {
        destination(id: $id){
            ...destinationFields
        }
    }
    ${fragments.DESTINATION}
`
export const ENTRIES = gql`
    query entries($first: Int, $after: String, $last: Int, $before: String) {
        entries(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...entryFields
            }
        }
    }
    ${fragments.ENTRY}
    ${fragments.PAGE_INFO}
`
export const ENTRY = gql`
    query entry($id: ID!) {
        entry(id: $id){
            ...entryFields
        }
    }
    ${fragments.ENTRY}
`
