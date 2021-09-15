/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editEntry
// ====================================================

export interface editEntry_editEntry {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
}

export interface editEntry {
  editEntry: editEntry_editEntry;
}

export interface editEntryVariables {
  entryId: string;
  dayArrive?: string | null;
  dayLeave?: string | null;
  destinationId?: string | null;
}
