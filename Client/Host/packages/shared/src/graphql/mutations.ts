/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserChannel = /* GraphQL */ `
  mutation CreateUserChannel(
    $input: CreateUserChannelInput!
    $condition: ModelUserChannelConditionInput
  ) {
    createUserChannel(input: $input, condition: $condition) {
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
export const updateUserChannel = /* GraphQL */ `
  mutation UpdateUserChannel(
    $input: UpdateUserChannelInput!
    $condition: ModelUserChannelConditionInput
  ) {
    updateUserChannel(input: $input, condition: $condition) {
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
export const deleteUserChannel = /* GraphQL */ `
  mutation DeleteUserChannel(
    $input: DeleteUserChannelInput!
    $condition: ModelUserChannelConditionInput
  ) {
    deleteUserChannel(input: $input, condition: $condition) {
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
