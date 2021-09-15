/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppUserstate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: editSelf
// ====================================================

export interface editSelf_editSelf {
  __typename: "AppUser";
  id: string;
  name: string;
  github: string;
  imgUrl: string;
  state: AppUserstate;
}

export interface editSelf {
  editSelf: editSelf_editSelf;
}

export interface editSelfVariables {
  name?: string | null;
  imgUrl?: string | null;
  state?: string | null;
}
