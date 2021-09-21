/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: entry
// ====================================================

export interface entry_entry_destination {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
}

export interface entry_entry_appUser_entries {
  __typename: "Entry";
  dayArrive: string;
}

export interface entry_entry_appUser {
  __typename: "AppUser";
  entries: entry_entry_appUser_entries[];
}

export interface entry_entry {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
  interest: boolean;
  destination: entry_entry_destination;
  appUser: entry_entry_appUser;
}

export interface entry {
  entry: entry_entry;
}

export interface entryVariables {
  id: string;
}
