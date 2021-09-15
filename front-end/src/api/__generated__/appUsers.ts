/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AppUserstate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: appUsers
// ====================================================

export interface appUsers_appUsers_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface appUsers_appUsers_edges {
  __typename: "AppUserEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface appUsers_appUsers_nodes {
  __typename: "AppUser";
  id: string;
  name: string;
  github: string;
  imgUrl: string;
  state: AppUserstate;
}

export interface appUsers_appUsers {
  __typename: "AppUserConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: appUsers_appUsers_pageInfo;
  /**
   * A list of edges.
   */
  edges: appUsers_appUsers_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: appUsers_appUsers_nodes[] | null;
}

export interface appUsers {
  appUsers: appUsers_appUsers | null;
}

export interface appUsersVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
