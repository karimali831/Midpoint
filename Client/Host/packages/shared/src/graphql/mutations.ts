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
export const createHostRoomMidiMessage = /* GraphQL */ `
  mutation CreateHostRoomMidiMessage(
    $input: CreateHostRoomMidiMessageInput!
    $condition: ModelHostRoomMidiMessageConditionInput
  ) {
    createHostRoomMidiMessage(input: $input, condition: $condition) {
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
export const updateHostRoomMidiMessage = /* GraphQL */ `
  mutation UpdateHostRoomMidiMessage(
    $input: UpdateHostRoomMidiMessageInput!
    $condition: ModelHostRoomMidiMessageConditionInput
  ) {
    updateHostRoomMidiMessage(input: $input, condition: $condition) {
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
export const deleteHostRoomMidiMessage = /* GraphQL */ `
  mutation DeleteHostRoomMidiMessage(
    $input: DeleteHostRoomMidiMessageInput!
    $condition: ModelHostRoomMidiMessageConditionInput
  ) {
    deleteHostRoomMidiMessage(input: $input, condition: $condition) {
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
