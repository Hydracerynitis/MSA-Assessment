/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: entries
// ====================================================

export interface entries_entries_pageInfo {
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

export interface entries_entries_edges {
  __typename: "EntryEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface entries_entries_nodes {
  __typename: "Entry";
  id: string;
  dayArrive: string;
  dayLeave: string;
}

export interface entries_entries {
  __typename: "EntryConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: entries_entries_pageInfo;
  /**
   * A list of edges.
   */
  edges: entries_entries_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: entries_entries_nodes[] | null;
}

export interface entries {
  entries: entries_entries | null;
}

export interface entriesVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
