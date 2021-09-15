/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addDestination
// ====================================================

export interface addDestination_addDestination {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
  interest: boolean;
}

export interface addDestination {
  addDestination: addDestination_addDestination;
}

export interface addDestinationVariables {
  name: string;
  address: string;
  interest?: string | null;
}
