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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
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
      nextToken
    }
  }
`;
export const getHostRoomMidiMessage = /* GraphQL */ `
  query GetHostRoomMidiMessage($id: ID!) {
    getHostRoomMidiMessage(id: $id) {
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
export const listHostRoomMidiMessages = /* GraphQL */ `
  query ListHostRoomMidiMessages(
    $id: ID
    $filter: ModelHostRoomMidiMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHostRoomMidiMessages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getHostRoom = /* GraphQL */ `
  query GetHostRoom($id: ID!) {
    getHostRoom(id: $id) {
      id
      name
      desc
      imageUri
      lastMessageId
      lastMessageDate
      createdUserId
      user {
        id
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
export const listHostRooms = /* GraphQL */ `
  query ListHostRooms(
    $id: ID
    $filter: ModelHostRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHostRooms(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        desc
        imageUri
        lastMessageId
        lastMessageDate
        createdUserId
        user {
          id
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
      nextToken
    }
  }
`;
export const getHostRoomUser = /* GraphQL */ `
  query GetHostRoomUser($id: ID!) {
    getHostRoomUser(id: $id) {
      id
      userId
      hostRoomId
      lastSeen
      archived
      pinned
      user {
        id
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
export const listHostRoomUsers = /* GraphQL */ `
  query ListHostRoomUsers(
    $id: ID
    $filter: ModelHostRoomUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHostRoomUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
        hostRoomId
        lastSeen
        archived
        pinned
        user {
          id
          firebaseUid
          email
          displayName
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
          createdAt
          updatedAt
          userRoomsId
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        createdAt
        updatedAt
        hostRoomRoomUsersId
        hostRoomUserUserId
      }
      nextToken
    }
  }
`;
export const getHostRoomChatMessage = /* GraphQL */ `
  query GetHostRoomChatMessage($id: ID!) {
    getHostRoomChatMessage(id: $id) {
      id
      userId
      roomId
      message
      read
      user {
        id
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
export const listHostRoomChatMessages = /* GraphQL */ `
  query ListHostRoomChatMessages(
    $id: ID
    $filter: ModelHostRoomChatMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHostRoomChatMessages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
        roomId
        message
        read
        user {
          id
          firebaseUid
          email
          displayName
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
      nextToken
    }
  }
`;
