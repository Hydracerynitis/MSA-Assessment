/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: destination
// ====================================================

export interface destination_destination {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
  interest: boolean;
}

export interface destination {
  destination: destination_destination;
}

export interface destinationVariables {
  id: string;
}
