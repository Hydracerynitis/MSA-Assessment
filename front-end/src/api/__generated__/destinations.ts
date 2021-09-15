/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: destinations
// ====================================================

export interface destinations_destinations_pageInfo {
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

export interface destinations_destinations_edges {
  __typename: "DestinationEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface destinations_destinations_nodes {
  __typename: "Destination";
  id: string;
  name: string;
  address: string;
  interest: boolean;
}

export interface destinations_destinations {
  __typename: "DestinationConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: destinations_destinations_pageInfo;
  /**
   * A list of edges.
   */
  edges: destinations_destinations_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: destinations_destinations_nodes[] | null;
}

export interface destinations {
  destinations: destinations_destinations | null;
}

export interface destinationsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
