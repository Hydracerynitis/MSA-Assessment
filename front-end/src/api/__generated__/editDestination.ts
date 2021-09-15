/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editDestination
// ====================================================

export interface editDestination_editDestination {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
  interest: boolean;
}

export interface editDestination {
  editDestination: editDestination_editDestination;
}

export interface editDestinationVariables {
  destinationId: string;
  name?: string | null;
  address?: string | null;
  interest?: string | null;
}
