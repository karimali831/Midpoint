/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userId
      email
      displayName
      channels {
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userId
        email
        displayName
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserChannel = /* GraphQL */ `
  query GetUserChannel($id: ID!) {
    getUserChannel(id: $id) {
      id
      name
      user {
        userId
        email
        displayName
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userChannelsId
    }
  }
`;
export const listUserChannels = /* GraphQL */ `
  query ListUserChannels(
    $filter: ModelUserChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        userChannelsId
      }
      nextToken
    }
  }
`;
