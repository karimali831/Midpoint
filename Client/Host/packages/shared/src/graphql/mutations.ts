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
export const createHostRoomMidiMessage = /* GraphQL */ `
  mutation CreateHostRoomMidiMessage(
    $input: CreateHostRoomMidiMessageInput!
    $condition: ModelHostRoomMidiMessageConditionInput
  ) {
    createHostRoomMidiMessage(input: $input, condition: $condition) {
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
        purchasedTokens
        createdInstanceId
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
export const updateHostRoomMidiMessage = /* GraphQL */ `
  mutation UpdateHostRoomMidiMessage(
    $input: UpdateHostRoomMidiMessageInput!
    $condition: ModelHostRoomMidiMessageConditionInput
  ) {
    updateHostRoomMidiMessage(input: $input, condition: $condition) {
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
        purchasedTokens
        createdInstanceId
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
export const deleteHostRoomMidiMessage = /* GraphQL */ `
  mutation DeleteHostRoomMidiMessage(
    $input: DeleteHostRoomMidiMessageInput!
    $condition: ModelHostRoomMidiMessageConditionInput
  ) {
    deleteHostRoomMidiMessage(input: $input, condition: $condition) {
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
        purchasedTokens
        createdInstanceId
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
