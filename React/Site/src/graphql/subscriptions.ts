/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      purchasedTokens
      remainingTokens
      createdInstanceId

    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateHostRoomUser = /* GraphQL */ `
  subscription OnCreateHostRoomUser(
    $filter: ModelSubscriptionHostRoomUserFilterInput
  ) {
    onCreateHostRoomUser(filter: $filter) {
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
export const onUpdateHostRoomUser = /* GraphQL */ `
  subscription OnUpdateHostRoomUser(
    $filter: ModelSubscriptionHostRoomUserFilterInput
  ) {
    onUpdateHostRoomUser(filter: $filter) {
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
export const onDeleteHostRoomUser = /* GraphQL */ `
  subscription OnDeleteHostRoomUser(
    $filter: ModelSubscriptionHostRoomUserFilterInput
  ) {
    onDeleteHostRoomUser(filter: $filter) {
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
export const onCreateHostRoom = /* GraphQL */ `
  subscription OnCreateHostRoom($filter: ModelSubscriptionHostRoomFilterInput) {
    onCreateHostRoom(filter: $filter) {
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
export const onUpdateHostRoom = /* GraphQL */ `
  subscription OnUpdateHostRoom($filter: ModelSubscriptionHostRoomFilterInput) {
    onUpdateHostRoom(filter: $filter) {
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
export const onDeleteHostRoom = /* GraphQL */ `
  subscription OnDeleteHostRoom($filter: ModelSubscriptionHostRoomFilterInput) {
    onDeleteHostRoom(filter: $filter) {
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
export const onCreateHostRoomChatMessage = /* GraphQL */ `
  subscription OnCreateHostRoomChatMessage(
    $filter: ModelSubscriptionHostRoomChatMessageFilterInput
  ) {
    onCreateHostRoomChatMessage(filter: $filter) {
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
export const onUpdateHostRoomChatMessage = /* GraphQL */ `
  subscription OnUpdateHostRoomChatMessage(
    $filter: ModelSubscriptionHostRoomChatMessageFilterInput
  ) {
    onUpdateHostRoomChatMessage(filter: $filter) {
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
export const onDeleteHostRoomChatMessage = /* GraphQL */ `
  subscription OnDeleteHostRoomChatMessage(
    $filter: ModelSubscriptionHostRoomChatMessageFilterInput
  ) {
    onDeleteHostRoomChatMessage(filter: $filter) {
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
