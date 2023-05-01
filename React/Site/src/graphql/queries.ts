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
      purchasedTokens
      remainingTokens
      createdInstanceId
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
        purchasedTokens
        remainingTokens
        createdInstanceId
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
        purchasedTokens
        remainingTokens
        createdInstanceId
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
        purchasedTokens
        remainingTokens
        createdInstanceId
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
export const hostRoomUsersByUserId = /* GraphQL */ `
  query HostRoomUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHostRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hostRoomUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
export const hostRoomUsersByHostRoomId = /* GraphQL */ `
  query HostRoomUsersByHostRoomId(
    $hostRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHostRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hostRoomUsersByHostRoomId(
      hostRoomId: $hostRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
export const hostRoomsByCreatedUserId = /* GraphQL */ `
  query HostRoomsByCreatedUserId(
    $createdUserId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHostRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hostRoomsByCreatedUserId(
      createdUserId: $createdUserId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
export const hostRoomChatMessagesByUserId = /* GraphQL */ `
  query HostRoomChatMessagesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHostRoomChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hostRoomChatMessagesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
export const hostRoomChatMessagesByRoomId = /* GraphQL */ `
  query HostRoomChatMessagesByRoomId(
    $roomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHostRoomChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hostRoomChatMessagesByRoomId(
      roomId: $roomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
          purchasedTokens
          remainingTokens
          createdInstanceId
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
