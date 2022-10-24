/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firebaseUid: string,
  email: string,
  displayName: string,
};

export type ModelUserConditionInput = {
  firebaseUid?: ModelIDInput | null,
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  firebaseUid: string,
  email: string,
  displayName: string,
  rooms?: ModelHostRoomConnection | null,
  chatMessages?: ModelHostRoomChatMessageConnection | null,
  midiMessages?: ModelHostRoomMidiMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelHostRoomConnection = {
  __typename: "ModelHostRoomConnection",
  items:  Array<HostRoom | null >,
  nextToken?: string | null,
};

export type HostRoom = {
  __typename: "HostRoom",
  id: string,
  name: string,
  desc?: string | null,
  imageUri?: string | null,
  lastMessageId?: string | null,
  lastMessageDate?: string | null,
  createdUserId: string,
  user?: User | null,
  roomUsers?: ModelHostRoomUserConnection | null,
  midiMessages?: ModelHostRoomMidiMessageConnection | null,
  chatMessages?: ModelHostRoomChatMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  userRoomsId?: string | null,
};

export type ModelHostRoomUserConnection = {
  __typename: "ModelHostRoomUserConnection",
  items:  Array<HostRoomUser | null >,
  nextToken?: string | null,
};

export type HostRoomUser = {
  __typename: "HostRoomUser",
  id: string,
  userId: string,
  hostRoomId: string,
  lastSeen?: string | null,
  archived: boolean,
  pinned: boolean,
  user?: User | null,
  room?: HostRoom | null,
  chatMessages?: ModelHostRoomChatMessageConnection | null,
  midiMessages?: ModelHostRoomMidiMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  hostRoomRoomUsersId?: string | null,
  hostRoomUserUserId?: string | null,
};

export type ModelHostRoomChatMessageConnection = {
  __typename: "ModelHostRoomChatMessageConnection",
  items:  Array<HostRoomChatMessage | null >,
  nextToken?: string | null,
};

export type HostRoomChatMessage = {
  __typename: "HostRoomChatMessage",
  id: string,
  userId: string,
  roomId: string,
  message: string,
  read: boolean,
  user?: User | null,
  room?: HostRoom | null,
  createdAt: string,
  updatedAt: string,
  userChatMessagesId?: string | null,
  hostRoomChatMessagesId?: string | null,
  hostRoomUserChatMessagesId?: string | null,
};

export type ModelHostRoomMidiMessageConnection = {
  __typename: "ModelHostRoomMidiMessageConnection",
  items:  Array<HostRoomMidiMessage | null >,
  nextToken?: string | null,
};

export type HostRoomMidiMessage = {
  __typename: "HostRoomMidiMessage",
  id: string,
  data: string,
  room?: HostRoom | null,
  createdAt: string,
  updatedAt: string,
  userMidiMessagesId?: string | null,
  hostRoomMidiMessagesId?: string | null,
  hostRoomUserMidiMessagesId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firebaseUid?: string | null,
  email?: string | null,
  displayName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateHostRoomMidiMessageInput = {
  id?: string | null,
  data: string,
  userMidiMessagesId?: string | null,
  hostRoomMidiMessagesId?: string | null,
  hostRoomUserMidiMessagesId?: string | null,
};

export type ModelHostRoomMidiMessageConditionInput = {
  data?: ModelStringInput | null,
  and?: Array< ModelHostRoomMidiMessageConditionInput | null > | null,
  or?: Array< ModelHostRoomMidiMessageConditionInput | null > | null,
  not?: ModelHostRoomMidiMessageConditionInput | null,
  userMidiMessagesId?: ModelIDInput | null,
  hostRoomMidiMessagesId?: ModelIDInput | null,
  hostRoomUserMidiMessagesId?: ModelIDInput | null,
};

export type UpdateHostRoomMidiMessageInput = {
  id: string,
  data?: string | null,
  userMidiMessagesId?: string | null,
  hostRoomMidiMessagesId?: string | null,
  hostRoomUserMidiMessagesId?: string | null,
};

export type DeleteHostRoomMidiMessageInput = {
  id: string,
};

export type CreateHostRoomInput = {
  id?: string | null,
  name: string,
  desc?: string | null,
  imageUri?: string | null,
  lastMessageId?: string | null,
  lastMessageDate?: string | null,
  createdUserId: string,
  userRoomsId?: string | null,
};

export type ModelHostRoomConditionInput = {
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  lastMessageId?: ModelIDInput | null,
  lastMessageDate?: ModelStringInput | null,
  createdUserId?: ModelIDInput | null,
  and?: Array< ModelHostRoomConditionInput | null > | null,
  or?: Array< ModelHostRoomConditionInput | null > | null,
  not?: ModelHostRoomConditionInput | null,
  userRoomsId?: ModelIDInput | null,
};

export type UpdateHostRoomInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
  imageUri?: string | null,
  lastMessageId?: string | null,
  lastMessageDate?: string | null,
  createdUserId?: string | null,
  userRoomsId?: string | null,
};

export type DeleteHostRoomInput = {
  id: string,
};

export type CreateHostRoomUserInput = {
  id?: string | null,
  userId: string,
  hostRoomId: string,
  lastSeen?: string | null,
  archived: boolean,
  pinned: boolean,
  hostRoomRoomUsersId?: string | null,
  hostRoomUserUserId?: string | null,
};

export type ModelHostRoomUserConditionInput = {
  userId?: ModelIDInput | null,
  hostRoomId?: ModelIDInput | null,
  lastSeen?: ModelStringInput | null,
  archived?: ModelBooleanInput | null,
  pinned?: ModelBooleanInput | null,
  and?: Array< ModelHostRoomUserConditionInput | null > | null,
  or?: Array< ModelHostRoomUserConditionInput | null > | null,
  not?: ModelHostRoomUserConditionInput | null,
  hostRoomRoomUsersId?: ModelIDInput | null,
  hostRoomUserUserId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateHostRoomUserInput = {
  id: string,
  userId?: string | null,
  hostRoomId?: string | null,
  lastSeen?: string | null,
  archived?: boolean | null,
  pinned?: boolean | null,
  hostRoomRoomUsersId?: string | null,
  hostRoomUserUserId?: string | null,
};

export type DeleteHostRoomUserInput = {
  id: string,
};

export type CreateHostRoomChatMessageInput = {
  id?: string | null,
  userId: string,
  roomId: string,
  message: string,
  read: boolean,
  userChatMessagesId?: string | null,
  hostRoomChatMessagesId?: string | null,
  hostRoomUserChatMessagesId?: string | null,
};

export type ModelHostRoomChatMessageConditionInput = {
  userId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  and?: Array< ModelHostRoomChatMessageConditionInput | null > | null,
  or?: Array< ModelHostRoomChatMessageConditionInput | null > | null,
  not?: ModelHostRoomChatMessageConditionInput | null,
  userChatMessagesId?: ModelIDInput | null,
  hostRoomChatMessagesId?: ModelIDInput | null,
  hostRoomUserChatMessagesId?: ModelIDInput | null,
};

export type UpdateHostRoomChatMessageInput = {
  id: string,
  userId?: string | null,
  roomId?: string | null,
  message?: string | null,
  read?: boolean | null,
  userChatMessagesId?: string | null,
  hostRoomChatMessagesId?: string | null,
  hostRoomUserChatMessagesId?: string | null,
};

export type DeleteHostRoomChatMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firebaseUid?: ModelIDInput | null,
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelHostRoomMidiMessageFilterInput = {
  id?: ModelIDInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelHostRoomMidiMessageFilterInput | null > | null,
  or?: Array< ModelHostRoomMidiMessageFilterInput | null > | null,
  not?: ModelHostRoomMidiMessageFilterInput | null,
  userMidiMessagesId?: ModelIDInput | null,
  hostRoomMidiMessagesId?: ModelIDInput | null,
  hostRoomUserMidiMessagesId?: ModelIDInput | null,
};

export type ModelHostRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  lastMessageId?: ModelIDInput | null,
  lastMessageDate?: ModelStringInput | null,
  createdUserId?: ModelIDInput | null,
  and?: Array< ModelHostRoomFilterInput | null > | null,
  or?: Array< ModelHostRoomFilterInput | null > | null,
  not?: ModelHostRoomFilterInput | null,
  userRoomsId?: ModelIDInput | null,
};

export type ModelHostRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  hostRoomId?: ModelIDInput | null,
  lastSeen?: ModelStringInput | null,
  archived?: ModelBooleanInput | null,
  pinned?: ModelBooleanInput | null,
  and?: Array< ModelHostRoomUserFilterInput | null > | null,
  or?: Array< ModelHostRoomUserFilterInput | null > | null,
  not?: ModelHostRoomUserFilterInput | null,
  hostRoomRoomUsersId?: ModelIDInput | null,
  hostRoomUserUserId?: ModelIDInput | null,
};

export type ModelHostRoomChatMessageFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  and?: Array< ModelHostRoomChatMessageFilterInput | null > | null,
  or?: Array< ModelHostRoomChatMessageFilterInput | null > | null,
  not?: ModelHostRoomChatMessageFilterInput | null,
  userChatMessagesId?: ModelIDInput | null,
  hostRoomChatMessagesId?: ModelIDInput | null,
  hostRoomUserChatMessagesId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHostRoomMidiMessageMutationVariables = {
  input: CreateHostRoomMidiMessageInput,
  condition?: ModelHostRoomMidiMessageConditionInput | null,
};

export type CreateHostRoomMidiMessageMutation = {
  createHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type UpdateHostRoomMidiMessageMutationVariables = {
  input: UpdateHostRoomMidiMessageInput,
  condition?: ModelHostRoomMidiMessageConditionInput | null,
};

export type UpdateHostRoomMidiMessageMutation = {
  updateHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type DeleteHostRoomMidiMessageMutationVariables = {
  input: DeleteHostRoomMidiMessageInput,
  condition?: ModelHostRoomMidiMessageConditionInput | null,
};

export type DeleteHostRoomMidiMessageMutation = {
  deleteHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type CreateHostRoomMutationVariables = {
  input: CreateHostRoomInput,
  condition?: ModelHostRoomConditionInput | null,
};

export type CreateHostRoomMutation = {
  createHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type UpdateHostRoomMutationVariables = {
  input: UpdateHostRoomInput,
  condition?: ModelHostRoomConditionInput | null,
};

export type UpdateHostRoomMutation = {
  updateHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type DeleteHostRoomMutationVariables = {
  input: DeleteHostRoomInput,
  condition?: ModelHostRoomConditionInput | null,
};

export type DeleteHostRoomMutation = {
  deleteHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type CreateHostRoomUserMutationVariables = {
  input: CreateHostRoomUserInput,
  condition?: ModelHostRoomUserConditionInput | null,
};

export type CreateHostRoomUserMutation = {
  createHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type UpdateHostRoomUserMutationVariables = {
  input: UpdateHostRoomUserInput,
  condition?: ModelHostRoomUserConditionInput | null,
};

export type UpdateHostRoomUserMutation = {
  updateHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type DeleteHostRoomUserMutationVariables = {
  input: DeleteHostRoomUserInput,
  condition?: ModelHostRoomUserConditionInput | null,
};

export type DeleteHostRoomUserMutation = {
  deleteHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type CreateHostRoomChatMessageMutationVariables = {
  input: CreateHostRoomChatMessageInput,
  condition?: ModelHostRoomChatMessageConditionInput | null,
};

export type CreateHostRoomChatMessageMutation = {
  createHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};

export type UpdateHostRoomChatMessageMutationVariables = {
  input: UpdateHostRoomChatMessageInput,
  condition?: ModelHostRoomChatMessageConditionInput | null,
};

export type UpdateHostRoomChatMessageMutation = {
  updateHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};

export type DeleteHostRoomChatMessageMutationVariables = {
  input: DeleteHostRoomChatMessageInput,
  condition?: ModelHostRoomChatMessageConditionInput | null,
};

export type DeleteHostRoomChatMessageMutation = {
  deleteHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHostRoomMidiMessageQueryVariables = {
  id: string,
};

export type GetHostRoomMidiMessageQuery = {
  getHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type ListHostRoomMidiMessagesQueryVariables = {
  id?: string | null,
  filter?: ModelHostRoomMidiMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHostRoomMidiMessagesQuery = {
  listHostRoomMidiMessages?:  {
    __typename: "ModelHostRoomMidiMessageConnection",
    items:  Array< {
      __typename: "HostRoomMidiMessage",
      id: string,
      data: string,
      room?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userMidiMessagesId?: string | null,
      hostRoomMidiMessagesId?: string | null,
      hostRoomUserMidiMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHostRoomQueryVariables = {
  id: string,
};

export type GetHostRoomQuery = {
  getHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type ListHostRoomsQueryVariables = {
  id?: string | null,
  filter?: ModelHostRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHostRoomsQuery = {
  listHostRooms?:  {
    __typename: "ModelHostRoomConnection",
    items:  Array< {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHostRoomUserQueryVariables = {
  id: string,
};

export type GetHostRoomUserQuery = {
  getHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type ListHostRoomUsersQueryVariables = {
  id?: string | null,
  filter?: ModelHostRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHostRoomUsersQuery = {
  listHostRoomUsers?:  {
    __typename: "ModelHostRoomUserConnection",
    items:  Array< {
      __typename: "HostRoomUser",
      id: string,
      userId: string,
      hostRoomId: string,
      lastSeen?: string | null,
      archived: boolean,
      pinned: boolean,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      room?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomRoomUsersId?: string | null,
      hostRoomUserUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHostRoomChatMessageQueryVariables = {
  id: string,
};

export type GetHostRoomChatMessageQuery = {
  getHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};

export type ListHostRoomChatMessagesQueryVariables = {
  id?: string | null,
  filter?: ModelHostRoomChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHostRoomChatMessagesQuery = {
  listHostRoomChatMessages?:  {
    __typename: "ModelHostRoomChatMessageConnection",
    items:  Array< {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      room?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userChatMessagesId?: string | null,
      hostRoomChatMessagesId?: string | null,
      hostRoomUserChatMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnMidiMessageSubscriptionVariables = {
  roomId: string,
  data: string,
};

export type OnMidiMessageSubscription = {
  onMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firebaseUid: string,
    email: string,
    displayName: string,
    rooms?:  {
      __typename: "ModelHostRoomConnection",
      items:  Array< {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        lastMessageId?: string | null,
        lastMessageDate?: string | null,
        createdUserId: string,
        createdAt: string,
        updatedAt: string,
        userRoomsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHostRoomMidiMessageSubscription = {
  onCreateHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type OnUpdateHostRoomMidiMessageSubscription = {
  onUpdateHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type OnDeleteHostRoomMidiMessageSubscription = {
  onDeleteHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    data: string,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMidiMessagesId?: string | null,
    hostRoomMidiMessagesId?: string | null,
    hostRoomUserMidiMessagesId?: string | null,
  } | null,
};

export type OnCreateHostRoomSubscription = {
  onCreateHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type OnUpdateHostRoomSubscription = {
  onUpdateHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type OnDeleteHostRoomSubscription = {
  onDeleteHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    lastMessageId?: string | null,
    lastMessageDate?: string | null,
    createdUserId: string,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    roomUsers?:  {
      __typename: "ModelHostRoomUserConnection",
      items:  Array< {
        __typename: "HostRoomUser",
        id: string,
        userId: string,
        hostRoomId: string,
        lastSeen?: string | null,
        archived: boolean,
        pinned: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRoomsId?: string | null,
  } | null,
};

export type OnCreateHostRoomUserSubscription = {
  onCreateHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type OnUpdateHostRoomUserSubscription = {
  onUpdateHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type OnDeleteHostRoomUserSubscription = {
  onDeleteHostRoomUser?:  {
    __typename: "HostRoomUser",
    id: string,
    userId: string,
    hostRoomId: string,
    lastSeen?: string | null,
    archived: boolean,
    pinned: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelHostRoomChatMessageConnection",
      items:  Array< {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        userChatMessagesId?: string | null,
        hostRoomChatMessagesId?: string | null,
        hostRoomUserChatMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userMidiMessagesId?: string | null,
        hostRoomMidiMessagesId?: string | null,
        hostRoomUserMidiMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type OnCreateHostRoomChatMessageSubscription = {
  onCreateHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};

export type OnUpdateHostRoomChatMessageSubscription = {
  onUpdateHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};

export type OnDeleteHostRoomChatMessageSubscription = {
  onDeleteHostRoomChatMessage?:  {
    __typename: "HostRoomChatMessage",
    id: string,
    userId: string,
    roomId: string,
    message: string,
    read: boolean,
    user?:  {
      __typename: "User",
      id: string,
      firebaseUid: string,
      email: string,
      displayName: string,
      rooms?:  {
        __typename: "ModelHostRoomConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    room?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      lastMessageId?: string | null,
      lastMessageDate?: string | null,
      createdUserId: string,
      user?:  {
        __typename: "User",
        id: string,
        firebaseUid: string,
        email: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      roomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userRoomsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChatMessagesId?: string | null,
    hostRoomChatMessagesId?: string | null,
    hostRoomUserChatMessagesId?: string | null,
  } | null,
};
