/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMidiMessage = /* GraphQL */ `
  subscription OnMidiMessage($roomId: ID!, $data: String!) {
    onMidiMessage(roomId: $roomId, data: $data) {
      id
      data
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userMidiMessagesId
      hostRoomMidiMessagesId
      hostRoomUserMidiMessagesId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      fullName
      firebaseUid
      email
      displayName
      rooms {
        items {
          id
          name
          desc
          imageUri
          lastMessageId
          lastMessageDate
          createdUserId
          createdAt
          updatedAt
          userRoomsId
        }
        nextToken
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
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
      fullName
      firebaseUid
      email
      displayName
      rooms {
        items {
          id
          name
          desc
          imageUri
          lastMessageId
          lastMessageDate
          createdUserId
          createdAt
          updatedAt
          userRoomsId
        }
        nextToken
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
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
      fullName
      firebaseUid
      email
      displayName
      rooms {
        items {
          id
          name
          desc
          imageUri
          lastMessageId
          lastMessageDate
          createdUserId
          createdAt
          updatedAt
          userRoomsId
        }
        nextToken
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHostRoomMidiMessage = /* GraphQL */ `
  subscription OnCreateHostRoomMidiMessage {
    onCreateHostRoomMidiMessage {
      id
      data
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userMidiMessagesId
      hostRoomMidiMessagesId
      hostRoomUserMidiMessagesId
    }
  }
`;
export const onUpdateHostRoomMidiMessage = /* GraphQL */ `
  subscription OnUpdateHostRoomMidiMessage {
    onUpdateHostRoomMidiMessage {
      id
      data
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userMidiMessagesId
      hostRoomMidiMessagesId
      hostRoomUserMidiMessagesId
    }
  }
`;
export const onDeleteHostRoomMidiMessage = /* GraphQL */ `
  subscription OnDeleteHostRoomMidiMessage {
    onDeleteHostRoomMidiMessage {
      id
      data
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userMidiMessagesId
      hostRoomMidiMessagesId
      hostRoomUserMidiMessagesId
    }
  }
`;
export const onCreateHostRoom = /* GraphQL */ `
  subscription OnCreateHostRoom {
    onCreateHostRoom {
      id
      name
      desc
      imageUri
      lastMessageId
      lastMessageDate
      createdUserId
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      roomUsers {
        items {
          id
          userId
          hostRoomId
          lastSeen
          archived
          pinned
          createdAt
          updatedAt
          hostRoomRoomUsersId
          hostRoomUserUserId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userRoomsId
    }
  }
`;
export const onUpdateHostRoom = /* GraphQL */ `
  subscription OnUpdateHostRoom {
    onUpdateHostRoom {
      id
      name
      desc
      imageUri
      lastMessageId
      lastMessageDate
      createdUserId
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      roomUsers {
        items {
          id
          userId
          hostRoomId
          lastSeen
          archived
          pinned
          createdAt
          updatedAt
          hostRoomRoomUsersId
          hostRoomUserUserId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userRoomsId
    }
  }
`;
export const onDeleteHostRoom = /* GraphQL */ `
  subscription OnDeleteHostRoom {
    onDeleteHostRoom {
      id
      name
      desc
      imageUri
      lastMessageId
      lastMessageDate
      createdUserId
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      roomUsers {
        items {
          id
          userId
          hostRoomId
          lastSeen
          archived
          pinned
          createdAt
          updatedAt
          hostRoomRoomUsersId
          hostRoomUserUserId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userRoomsId
    }
  }
`;
export const onCreateHostRoomUser = /* GraphQL */ `
  subscription OnCreateHostRoomUser {
    onCreateHostRoomUser {
      id
      userId
      hostRoomId
      lastSeen
      archived
      pinned
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      hostRoomRoomUsersId
      hostRoomUserUserId
    }
  }
`;
export const onUpdateHostRoomUser = /* GraphQL */ `
  subscription OnUpdateHostRoomUser {
    onUpdateHostRoomUser {
      id
      userId
      hostRoomId
      lastSeen
      archived
      pinned
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      hostRoomRoomUsersId
      hostRoomUserUserId
    }
  }
`;
export const onDeleteHostRoomUser = /* GraphQL */ `
  subscription OnDeleteHostRoomUser {
    onDeleteHostRoomUser {
      id
      userId
      hostRoomId
      lastSeen
      archived
      pinned
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      chatMessages {
        items {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          userChatMessagesId
          hostRoomChatMessagesId
          hostRoomUserChatMessagesId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          data
          createdAt
          updatedAt
          userMidiMessagesId
          hostRoomMidiMessagesId
          hostRoomUserMidiMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      hostRoomRoomUsersId
      hostRoomUserUserId
    }
  }
`;
export const onCreateHostRoomChatMessage = /* GraphQL */ `
  subscription OnCreateHostRoomChatMessage {
    onCreateHostRoomChatMessage {
      id
      userId
      roomId
      message
      read
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userChatMessagesId
      hostRoomChatMessagesId
      hostRoomUserChatMessagesId
    }
  }
`;
export const onUpdateHostRoomChatMessage = /* GraphQL */ `
  subscription OnUpdateHostRoomChatMessage {
    onUpdateHostRoomChatMessage {
      id
      userId
      roomId
      message
      read
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userChatMessagesId
      hostRoomChatMessagesId
      hostRoomUserChatMessagesId
    }
  }
`;
export const onDeleteHostRoomChatMessage = /* GraphQL */ `
  subscription OnDeleteHostRoomChatMessage {
    onDeleteHostRoomChatMessage {
      id
      userId
      roomId
      message
      read
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        rooms {
          nextToken
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
      }
      room {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          createdAt
          updatedAt
        }
        roomUsers {
          nextToken
        }
        midiMessages {
          nextToken
        }
        chatMessages {
          nextToken
        }
        createdAt
        updatedAt
        userRoomsId
      }
      createdAt
      updatedAt
      userChatMessagesId
      hostRoomChatMessagesId
      hostRoomUserChatMessagesId
    }
  }
`;
