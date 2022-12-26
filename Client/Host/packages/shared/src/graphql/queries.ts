/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullName
      firebaseUid
      email
      displayName
      imageUri
      defaultMidiDevice
      hostRoomUser {
        items {
          id
          userId
          hostRoomId
          lastSeen
          archived
          pinned
          createdAt
          updatedAt
          userHostRoomUserId
          hostRoomHostRoomUsersId
          hostRoomUserUserId
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
        fullName
        firebaseUid
        email
        displayName
        imageUri
        defaultMidiDevice
        hostRoomUser {
          nextToken
        }
        createdAt
        updatedAt
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
        fullName
        firebaseUid
        email
        displayName
        imageUri
        defaultMidiDevice
        hostRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      hostRoom {
        id
        name
        desc
        imageUri
        createdUserId
        lastMessageId
        lastMessage {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          hostRoomChatMessagesId
          hostRoomChatMessageUserId
          hostRoomChatMessageHostRoomId
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        hostRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        hostRoomLastMessageId
      }
      createdAt
      updatedAt
      userHostRoomUserId
      hostRoomHostRoomUsersId
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
          fullName
          firebaseUid
          email
          displayName
          imageUri
          defaultMidiDevice
          createdAt
          updatedAt
        }
        hostRoom {
          id
          name
          desc
          imageUri
          createdUserId
          lastMessageId
          createdAt
          updatedAt
          hostRoomLastMessageId
        }
        createdAt
        updatedAt
        userHostRoomUserId
        hostRoomHostRoomUsersId
        hostRoomUserUserId
      }
      nextToken
    }
  }
`;
export const getHostRoomMidiMessage = /* GraphQL */ `
  query GetHostRoomMidiMessage($id: ID!) {
    getHostRoomMidiMessage(id: $id) {
      id
      userId
      roomId
      data
      user {
        id
        fullName
        firebaseUid
        email
        displayName
        imageUri
        defaultMidiDevice
        hostRoomUser {
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
        createdUserId
        lastMessageId
        lastMessage {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          hostRoomChatMessagesId
          hostRoomChatMessageUserId
          hostRoomChatMessageHostRoomId
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        hostRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        hostRoomLastMessageId
      }
      createdAt
      updatedAt
      hostRoomMidiMessagesId
      hostRoomMidiMessageUserId
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
        userId
        roomId
        data
        user {
          id
          fullName
          firebaseUid
          email
          displayName
          imageUri
          defaultMidiDevice
          createdAt
          updatedAt
        }
        room {
          id
          name
          desc
          imageUri
          createdUserId
          lastMessageId
          createdAt
          updatedAt
          hostRoomLastMessageId
        }
        createdAt
        updatedAt
        hostRoomMidiMessagesId
        hostRoomMidiMessageUserId
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
      createdUserId
      lastMessageId
      lastMessage {
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
          imageUri
          defaultMidiDevice
          createdAt
          updatedAt
        }
        hostRoom {
          id
          name
          desc
          imageUri
          createdUserId
          lastMessageId
          createdAt
          updatedAt
          hostRoomLastMessageId
        }
        createdAt
        updatedAt
        hostRoomChatMessagesId
        hostRoomChatMessageUserId
        hostRoomChatMessageHostRoomId
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
          hostRoomChatMessagesId
          hostRoomChatMessageUserId
          hostRoomChatMessageHostRoomId
        }
        nextToken
      }
      midiMessages {
        items {
          id
          userId
          roomId
          data
          createdAt
          updatedAt
          hostRoomMidiMessagesId
          hostRoomMidiMessageUserId
        }
        nextToken
      }
      hostRoomUsers {
        items {
          id
          userId
          hostRoomId
          lastSeen
          archived
          pinned
          createdAt
          updatedAt
          userHostRoomUserId
          hostRoomHostRoomUsersId
          hostRoomUserUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      hostRoomLastMessageId
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
        createdUserId
        lastMessageId
        lastMessage {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          hostRoomChatMessagesId
          hostRoomChatMessageUserId
          hostRoomChatMessageHostRoomId
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        hostRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        hostRoomLastMessageId
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
        fullName
        firebaseUid
        email
        displayName
        imageUri
        defaultMidiDevice
        hostRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      hostRoom {
        id
        name
        desc
        imageUri
        createdUserId
        lastMessageId
        lastMessage {
          id
          userId
          roomId
          message
          read
          createdAt
          updatedAt
          hostRoomChatMessagesId
          hostRoomChatMessageUserId
          hostRoomChatMessageHostRoomId
        }
        chatMessages {
          nextToken
        }
        midiMessages {
          nextToken
        }
        hostRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        hostRoomLastMessageId
      }
      createdAt
      updatedAt
      hostRoomChatMessagesId
      hostRoomChatMessageUserId
      hostRoomChatMessageHostRoomId
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
          fullName
          firebaseUid
          email
          displayName
          imageUri
          defaultMidiDevice
          createdAt
          updatedAt
        }
        hostRoom {
          id
          name
          desc
          imageUri
          createdUserId
          lastMessageId
          createdAt
          updatedAt
          hostRoomLastMessageId
        }
        createdAt
        updatedAt
        hostRoomChatMessagesId
        hostRoomChatMessageUserId
        hostRoomChatMessageHostRoomId
      }
      nextToken
    }
  }
`;
