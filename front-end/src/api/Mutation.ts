import { gql } from "@apollo/client";
import * as fragments from "./Fragments";

export const LOGIN = gql`
  mutation login($code: String!) {
    login(input: { code: $code }) {
      ...payloadFields
    }
  }
  ${fragments.LOGINPAYLOAD}
`;

export const EDIT_SELF = gql`
  mutation editSelf($name: String, $imgUrl: String, $state: String) {
    editSelf(input: { name: $name, imgUrl: $imgUrl,state:$state }) {
      ...appuserFields
    }
  }
  ${fragments.APPUSER}
`;

export const EDIT_ENTRY = gql`
  mutation editEntry($entryId: ID!,$name:String!, $address:String!, $arrive:String!, $leave:String!, $interest:String!) {
    editEntry( input: { entryId: $entryId, name:$name,address:$address,arrive:$arrive,leave:$leave,interest:$interest}) {
        ...entryFields
        destination{
          ...destinationFields
        }
    }
  }
  ${fragments.ENTRY}
  ${fragments.DESTINATION}
`;

export const SUBMIT_FORM=gql`
  mutation submitEntry($name:String!, $address:String!, $arrive:String!, $leave:String!, $interest:String!){
    submitEntry(input:{name:$name,address:$address,arrive:$arrive,leave:$leave,interest:$interest}){
      ...entryFields
    }
  }
  ${fragments.ENTRY}
`