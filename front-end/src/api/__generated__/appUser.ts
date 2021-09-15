/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppUserstate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: appUser
// ====================================================

export interface appUser_appUser {
  __typename: "AppUser";
  id: string;
  name: string;
  github: string;
  imgUrl: string;
  state: AppUserstate;
}

export interface appUser {
  appUser: appUser_appUser;
}

export interface appUserVariables {
  id: string;
}
