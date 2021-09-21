/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitEntry
// ====================================================

export interface submitEntry_submitEntry {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
  interest: boolean;
}

export interface submitEntry {
  submitEntry: submitEntry_submitEntry;
}

export interface submitEntryVariables {
  name: string;
  address: string;
  arrive: string;
  leave: string;
  interest: string;
}
