/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserChannel = /* GraphQL */ `
  mutation CreateUserChannel(
    $input: CreateUserChannelInput!
    $condition: ModelUserChannelConditionInput
  ) {
    createUserChannel(input: $input, condition: $condition) {
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
      midiMessages {
        items {
          id
          midiData
          createdAt
          updatedAt
          userChannelMidiMessagesId
        }
        nextToken
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
      midiMessages {
        items {
          id
          midiData
          createdAt
          updatedAt
          userChannelMidiMessagesId
        }
        nextToken
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
      midiMessages {
        items {
          id
          midiData
          createdAt
          updatedAt
          userChannelMidiMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userChannelsId
    }
  }
`;
export const createMidiMessage = /* GraphQL */ `
  mutation CreateMidiMessage(
    $input: CreateMidiMessageInput!
    $condition: ModelMidiMessageConditionInput
  ) {
    createMidiMessage(input: $input, condition: $condition) {
      id
      midiData
      channel {
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
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
        userChannelsId
      }
      createdAt
      updatedAt
      userChannelMidiMessagesId
    }
  }
`;
export const updateMidiMessage = /* GraphQL */ `
  mutation UpdateMidiMessage(
    $input: UpdateMidiMessageInput!
    $condition: ModelMidiMessageConditionInput
  ) {
    updateMidiMessage(input: $input, condition: $condition) {
      id
      midiData
      channel {
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
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
        userChannelsId
      }
      createdAt
      updatedAt
      userChannelMidiMessagesId
    }
  }
`;
export const deleteMidiMessage = /* GraphQL */ `
  mutation DeleteMidiMessage(
    $input: DeleteMidiMessageInput!
    $condition: ModelMidiMessageConditionInput
  ) {
    deleteMidiMessage(input: $input, condition: $condition) {
      id
      midiData
      channel {
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
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
        userChannelsId
      }
      createdAt
      updatedAt
      userChannelMidiMessagesId
    }
  }
`;
