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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createHostRoomUser = /* GraphQL */ `
  mutation CreateHostRoomUser(
    $input: CreateHostRoomUserInput!
    $condition: ModelHostRoomUserConditionInput
  ) {
    createHostRoomUser(input: $input, condition: $condition) {
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
export const updateHostRoomUser = /* GraphQL */ `
  mutation UpdateHostRoomUser(
    $input: UpdateHostRoomUserInput!
    $condition: ModelHostRoomUserConditionInput
  ) {
    updateHostRoomUser(input: $input, condition: $condition) {
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
export const deleteHostRoomUser = /* GraphQL */ `
  mutation DeleteHostRoomUser(
    $input: DeleteHostRoomUserInput!
    $condition: ModelHostRoomUserConditionInput
  ) {
    deleteHostRoomUser(input: $input, condition: $condition) {
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
export const createHostRoom = /* GraphQL */ `
  mutation CreateHostRoom(
    $input: CreateHostRoomInput!
    $condition: ModelHostRoomConditionInput
  ) {
    createHostRoom(input: $input, condition: $condition) {
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
export const updateHostRoom = /* GraphQL */ `
  mutation UpdateHostRoom(
    $input: UpdateHostRoomInput!
    $condition: ModelHostRoomConditionInput
  ) {
    updateHostRoom(input: $input, condition: $condition) {
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
export const deleteHostRoom = /* GraphQL */ `
  mutation DeleteHostRoom(
    $input: DeleteHostRoomInput!
    $condition: ModelHostRoomConditionInput
  ) {
    deleteHostRoom(input: $input, condition: $condition) {
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
export const createHostRoomChatMessage = /* GraphQL */ `
  mutation CreateHostRoomChatMessage(
    $input: CreateHostRoomChatMessageInput!
    $condition: ModelHostRoomChatMessageConditionInput
  ) {
    createHostRoomChatMessage(input: $input, condition: $condition) {
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
export const updateHostRoomChatMessage = /* GraphQL */ `
  mutation UpdateHostRoomChatMessage(
    $input: UpdateHostRoomChatMessageInput!
    $condition: ModelHostRoomChatMessageConditionInput
  ) {
    updateHostRoomChatMessage(input: $input, condition: $condition) {
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
export const deleteHostRoomChatMessage = /* GraphQL */ `
  mutation DeleteHostRoomChatMessage(
    $input: DeleteHostRoomChatMessageInput!
    $condition: ModelHostRoomChatMessageConditionInput
  ) {
    deleteHostRoomChatMessage(input: $input, condition: $condition) {
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
