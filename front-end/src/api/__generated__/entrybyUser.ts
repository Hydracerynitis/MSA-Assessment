/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: entrybyUser
// ====================================================

export interface entrybyUser_entrybyUser {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
}

export interface entrybyUser {
  entrybyUser: entrybyUser_entrybyUser[];
}

export interface entrybyUserVariables {
  appuserid: string;
}
