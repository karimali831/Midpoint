/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      userId
      firebaseUid
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      userId
      firebaseUid
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      userId
      firebaseUid
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
export const onCreateUserChannel = /* GraphQL */ `
  subscription OnCreateUserChannel {
    onCreateUserChannel {
      id
      name
      user {
        userId
        firebaseUid
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
export const onUpdateUserChannel = /* GraphQL */ `
  subscription OnUpdateUserChannel {
    onUpdateUserChannel {
      id
      name
      user {
        userId
        firebaseUid
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
export const onDeleteUserChannel = /* GraphQL */ `
  subscription OnDeleteUserChannel {
    onDeleteUserChannel {
      id
      name
      user {
        userId
        firebaseUid
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
