/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMidiMessage = /* GraphQL */ `
  subscription OnMidiMessage($channelId: ID!, $midiData: String!) {
    onMidiMessage(channelId: $channelId, midiData: $midiData) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserChannel = /* GraphQL */ `
  subscription OnCreateUserChannel {
    onCreateUserChannel {
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
export const onUpdateUserChannel = /* GraphQL */ `
  subscription OnUpdateUserChannel {
    onUpdateUserChannel {
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
export const onDeleteUserChannel = /* GraphQL */ `
  subscription OnDeleteUserChannel {
    onDeleteUserChannel {
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
export const onCreateMidiMessage = /* GraphQL */ `
  subscription OnCreateMidiMessage {
    onCreateMidiMessage {
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
export const onUpdateMidiMessage = /* GraphQL */ `
  subscription OnUpdateMidiMessage {
    onUpdateMidiMessage {
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
export const onDeleteMidiMessage = /* GraphQL */ `
  subscription OnDeleteMidiMessage {
    onDeleteMidiMessage {
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
