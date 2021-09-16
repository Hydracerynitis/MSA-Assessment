/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppUserstate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: payloadFields
// ====================================================

export interface payloadFields_appUser {
  __typename: "AppUser";
  id: string;
  name: string;
  github: string;
  imgUrl: string;
  state: AppUserstate;
}

export interface payloadFields {
  __typename: "LoginPayload";
  appUser: payloadFields_appUser;
  jwt: string;
}
