/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppUserstate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Self
// ====================================================

export interface Self_self {
  __typename: "AppUser";
  id: string;
  name: string;
  github: string;
  imgUrl: string;
  state: AppUserstate;
}

export interface Self {
  self: Self_self;
}
