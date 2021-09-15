/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: entry
// ====================================================

export interface entry_entry {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
}

export interface entry {
  entry: entry_entry;
}

export interface entryVariables {
  id: string;
}
