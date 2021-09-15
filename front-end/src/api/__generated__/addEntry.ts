/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addEntry
// ====================================================

export interface addEntry_addEntry {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
}

export interface addEntry {
  addEntry: addEntry_addEntry;
}

export interface addEntryVariables {
  dayArrive: string;
  dayLeave: string;
  destinationId: string;
}
