/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editEntry
// ====================================================

export interface editEntry_editEntry_destination {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
}

export interface editEntry_editEntry {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
  interest: boolean;
  destination: editEntry_editEntry_destination;
}

export interface editEntry {
  editEntry: editEntry_editEntry;
}

export interface editEntryVariables {
  entryId: string;
  name: string;
  address: string;
  arrive: string;
  leave: string;
  interest: string;
}
