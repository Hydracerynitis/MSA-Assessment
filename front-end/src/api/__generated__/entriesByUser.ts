/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: entriesByUser
// ====================================================

export interface entriesByUser_entriesByUser_destination {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
}

export interface entriesByUser_entriesByUser {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
  interest: boolean;
  destination: entriesByUser_entriesByUser_destination;
}

export interface entriesByUser {
  entriesByUser: entriesByUser_entriesByUser[];
}
