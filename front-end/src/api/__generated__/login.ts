/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppUserstate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_appUser {
  __typename: "AppUser";
  id: string;
  name: string;
  github: string;
  imgUrl: string;
  state: AppUserstate;
}

export interface login_login {
  __typename: "LoginPayload";
  appUser: login_login_appUser;
  jwt: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  code: string;
}
