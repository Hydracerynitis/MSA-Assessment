import { gql } from "@apollo/client";
import * as fragments from "./Fragments";

export const LOGIN = gql`
  mutation login($code: String!) {
    login(input: { code: $code }) {
      appUser {
        ...appuserFields
      }
      jwt
    }
  }
  ${fragments.APPUSER}
`;

export const EDIT_SELF = gql`
  mutation editSelf($name: String, $imgUrl: String, $state: String) {
    editSelf(input: { name: $name, imgUrl: $imgUrl,state:$state }) {
      ...appuserFields
    }
  }
  ${fragments.APPUSER}
`;


export const ADD_ENTRY = gql`
  mutation addEntry(
    $dayArrive: String!,
    $dayLeave: String!,
    $destinationId: String!
  ) {
    addEntry(input: { dayArrive: $dayArrive, dayLeave: $dayLeave, destinationId: $destinationId }) {
      ...entryFields
    }
  }
  ${fragments.ENTRY}
`;

export const EDIT_ENTRY = gql`
  mutation editEntry(
    $entryId: ID!,
    $dayArrive: String,
    $dayLeave: String,
    $destinationId: String
  ) {
    editEntry( input: { entryId: $entryId, dayArrive: $dayArrive, dayLeave: $dayLeave, destinationId: $destinationId }) {
        ...entryFields
    }
  }
  ${fragments.ENTRY}
`;

export const ADD_DESTINATION = gql`
  mutation addDestination(
    $name: String!,
    $address: String!,
    $interest :String
  ) {
    addDestination(input: { name: $name, address: $address, interest:$interest }) {
      ...destinationFields
    }
  }
  ${fragments.DESTINATION}
`

export const EDIT_DESTINATION = gql`
  mutation editDestination(
    $destinationId: ID!,
    $name: String,
    $address: String
    $interest: String
  ) {
    editDestination(input: {destinationId:$destinationId, name: $name, address: $address, interest:$interest }) {
        ...destinationFields
    }
  }
  ${fragments.DESTINATION}
`