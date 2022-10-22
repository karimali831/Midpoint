/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firebaseUid
      email
      displayName
      channels {
        items {
          id
          name
          createdAt
          updatedAt
          userChannelsId
        }
        nextToken
      }
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
        id
        firebaseUid
        email
        displayName
        channels {
          nextToken
        }
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
        id
        firebaseUid
        email
        displayName
        channels {
          nextToken
        }
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
        user {
          id
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userChannelsId
      }
      nextToken
    }
  }
`;
