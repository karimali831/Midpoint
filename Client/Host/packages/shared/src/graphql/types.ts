/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  fullName?: string | null,
  firebaseUid: string,
  email: string,
  displayName: string,
  imageUri?: string | null,
};

export type ModelUserConditionInput = {
  fullName?: ModelStringInput | null,
  firebaseUid?: ModelIDInput | null,
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  fullName?: string | null,
  firebaseUid: string,
  email: string,
  displayName: string,
  imageUri?: string | null,
  hostRoomUser?: ModelHostRoomUserConnection | null,
  createdAt: string,
  updatedAt: string,
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
  hostRoom?: HostRoom | null,
  createdAt: string,
  updatedAt: string,
  userHostRoomUserId?: string | null,
  hostRoomHostRoomUsersId?: string | null,
  hostRoomUserUserId?: string | null,
};

export type HostRoom = {
  __typename: "HostRoom",
  id: string,
  name: string,
  desc?: string | null,
  imageUri?: string | null,
  createdUserId: string,
  lastMessageId?: string | null,
  lastMessage?: HostRoomChatMessage | null,
  chatMessages?: ModelHostRoomChatMessageConnection | null,
  midiMessages?: ModelHostRoomMidiMessageConnection | null,
  hostRoomUsers?: ModelHostRoomUserConnection | null,
  createdAt: string,
  updatedAt: string,
  hostRoomLastMessageId?: string | null,
};

export type HostRoomChatMessage = {
  __typename: "HostRoomChatMessage",
  id: string,
  userId: string,
  roomId: string,
  message: string,
  read: boolean,
  user?: User | null,
  hostRoom?: HostRoom | null,
  createdAt: string,
  updatedAt: string,
  hostRoomChatMessagesId?: string | null,
  hostRoomChatMessageUserId?: string | null,
  hostRoomChatMessageHostRoomId?: string | null,
};

export type ModelHostRoomChatMessageConnection = {
  __typename: "ModelHostRoomChatMessageConnection",
  items:  Array<HostRoomChatMessage | null >,
  nextToken?: string | null,
};

export type ModelHostRoomMidiMessageConnection = {
  __typename: "ModelHostRoomMidiMessageConnection",
  items:  Array<HostRoomMidiMessage | null >,
  nextToken?: string | null,
};

export type HostRoomMidiMessage = {
  __typename: "HostRoomMidiMessage",
  id: string,
  userId: string,
  roomId: string,
  data: string,
  user?: User | null,
  room?: HostRoom | null,
  createdAt: string,
  updatedAt: string,
  hostRoomMidiMessagesId?: string | null,
  hostRoomMidiMessageUserId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  fullName?: string | null,
  firebaseUid?: string | null,
  email?: string | null,
  displayName?: string | null,
  imageUri?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateHostRoomUserInput = {
  id?: string | null,
  userId: string,
  hostRoomId: string,
  lastSeen?: string | null,
  archived: boolean,
  pinned: boolean,
  userHostRoomUserId?: string | null,
  hostRoomHostRoomUsersId?: string | null,
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
  userHostRoomUserId?: ModelIDInput | null,
  hostRoomHostRoomUsersId?: ModelIDInput | null,
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
  userHostRoomUserId?: string | null,
  hostRoomHostRoomUsersId?: string | null,
  hostRoomUserUserId?: string | null,
};

export type DeleteHostRoomUserInput = {
  id: string,
};

export type CreateHostRoomMidiMessageInput = {
  id?: string | null,
  userId: string,
  roomId: string,
  data: string,
  hostRoomMidiMessagesId?: string | null,
  hostRoomMidiMessageUserId?: string | null,
};

export type ModelHostRoomMidiMessageConditionInput = {
  userId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelHostRoomMidiMessageConditionInput | null > | null,
  or?: Array< ModelHostRoomMidiMessageConditionInput | null > | null,
  not?: ModelHostRoomMidiMessageConditionInput | null,
  hostRoomMidiMessagesId?: ModelIDInput | null,
  hostRoomMidiMessageUserId?: ModelIDInput | null,
};

export type UpdateHostRoomMidiMessageInput = {
  id: string,
  userId?: string | null,
  roomId?: string | null,
  data?: string | null,
  hostRoomMidiMessagesId?: string | null,
  hostRoomMidiMessageUserId?: string | null,
};

export type DeleteHostRoomMidiMessageInput = {
  id: string,
};

export type CreateHostRoomInput = {
  id?: string | null,
  name: string,
  desc?: string | null,
  imageUri?: string | null,
  createdUserId: string,
  lastMessageId?: string | null,
  hostRoomLastMessageId?: string | null,
};

export type ModelHostRoomConditionInput = {
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  createdUserId?: ModelIDInput | null,
  lastMessageId?: ModelIDInput | null,
  and?: Array< ModelHostRoomConditionInput | null > | null,
  or?: Array< ModelHostRoomConditionInput | null > | null,
  not?: ModelHostRoomConditionInput | null,
  hostRoomLastMessageId?: ModelIDInput | null,
};

export type UpdateHostRoomInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
  imageUri?: string | null,
  createdUserId?: string | null,
  lastMessageId?: string | null,
  hostRoomLastMessageId?: string | null,
};

export type DeleteHostRoomInput = {
  id: string,
};

export type CreateHostRoomChatMessageInput = {
  id?: string | null,
  userId: string,
  roomId: string,
  message: string,
  read: boolean,
  hostRoomChatMessagesId?: string | null,
  hostRoomChatMessageUserId?: string | null,
  hostRoomChatMessageHostRoomId?: string | null,
};

export type ModelHostRoomChatMessageConditionInput = {
  userId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  and?: Array< ModelHostRoomChatMessageConditionInput | null > | null,
  or?: Array< ModelHostRoomChatMessageConditionInput | null > | null,
  not?: ModelHostRoomChatMessageConditionInput | null,
  hostRoomChatMessagesId?: ModelIDInput | null,
  hostRoomChatMessageUserId?: ModelIDInput | null,
  hostRoomChatMessageHostRoomId?: ModelIDInput | null,
};

export type UpdateHostRoomChatMessageInput = {
  id: string,
  userId?: string | null,
  roomId?: string | null,
  message?: string | null,
  read?: boolean | null,
  hostRoomChatMessagesId?: string | null,
  hostRoomChatMessageUserId?: string | null,
  hostRoomChatMessageHostRoomId?: string | null,
};

export type DeleteHostRoomChatMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  fullName?: ModelStringInput | null,
  firebaseUid?: ModelIDInput | null,
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
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
  userHostRoomUserId?: ModelIDInput | null,
  hostRoomHostRoomUsersId?: ModelIDInput | null,
  hostRoomUserUserId?: ModelIDInput | null,
};

export type ModelHostRoomMidiMessageFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelHostRoomMidiMessageFilterInput | null > | null,
  or?: Array< ModelHostRoomMidiMessageFilterInput | null > | null,
  not?: ModelHostRoomMidiMessageFilterInput | null,
  hostRoomMidiMessagesId?: ModelIDInput | null,
  hostRoomMidiMessageUserId?: ModelIDInput | null,
};

export type ModelHostRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  createdUserId?: ModelIDInput | null,
  lastMessageId?: ModelIDInput | null,
  and?: Array< ModelHostRoomFilterInput | null > | null,
  or?: Array< ModelHostRoomFilterInput | null > | null,
  not?: ModelHostRoomFilterInput | null,
  hostRoomLastMessageId?: ModelIDInput | null,
};

export type ModelHostRoomConnection = {
  __typename: "ModelHostRoomConnection",
  items:  Array<HostRoom | null >,
  nextToken?: string | null,
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
  hostRoomChatMessagesId?: ModelIDInput | null,
  hostRoomChatMessageUserId?: ModelIDInput | null,
  hostRoomChatMessageHostRoomId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  firebaseUid?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionHostRoomUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  hostRoomId?: ModelSubscriptionIDInput | null,
  lastSeen?: ModelSubscriptionStringInput | null,
  archived?: ModelSubscriptionBooleanInput | null,
  pinned?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionHostRoomUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionHostRoomUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionHostRoomMidiMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  roomId?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHostRoomMidiMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionHostRoomMidiMessageFilterInput | null > | null,
};

export type ModelSubscriptionHostRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  desc?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  createdUserId?: ModelSubscriptionIDInput | null,
  lastMessageId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHostRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionHostRoomFilterInput | null > | null,
};

export type ModelSubscriptionHostRoomChatMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  roomId?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  read?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionHostRoomChatMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionHostRoomChatMessageFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
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
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
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
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
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
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
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
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
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
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
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
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
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
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
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
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
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
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHostRoomUserId?: string | null,
      hostRoomHostRoomUsersId?: string | null,
      hostRoomUserUserId?: string | null,
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
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
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
      userId: string,
      roomId: string,
      data: string,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      room?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomMidiMessagesId?: string | null,
      hostRoomMidiMessageUserId?: string | null,
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
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
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
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    fullName?: string | null,
    firebaseUid: string,
    email: string,
    displayName: string,
    imageUri?: string | null,
    hostRoomUser?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHostRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomUserFilterInput | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type OnUpdateHostRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomUserFilterInput | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type OnDeleteHostRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomUserFilterInput | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHostRoomUserId?: string | null,
    hostRoomHostRoomUsersId?: string | null,
    hostRoomUserUserId?: string | null,
  } | null,
};

export type OnCreateHostRoomMidiMessageSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomMidiMessageFilterInput | null,
};

export type OnCreateHostRoomMidiMessageSubscription = {
  onCreateHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
  } | null,
};

export type OnUpdateHostRoomMidiMessageSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomMidiMessageFilterInput | null,
};

export type OnUpdateHostRoomMidiMessageSubscription = {
  onUpdateHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
  } | null,
};

export type OnDeleteHostRoomMidiMessageSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomMidiMessageFilterInput | null,
};

export type OnDeleteHostRoomMidiMessageSubscription = {
  onDeleteHostRoomMidiMessage?:  {
    __typename: "HostRoomMidiMessage",
    id: string,
    userId: string,
    roomId: string,
    data: string,
    user?:  {
      __typename: "User",
      id: string,
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
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
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomMidiMessagesId?: string | null,
    hostRoomMidiMessageUserId?: string | null,
  } | null,
};

export type OnCreateHostRoomSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomFilterInput | null,
};

export type OnCreateHostRoomSubscription = {
  onCreateHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateHostRoomSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomFilterInput | null,
};

export type OnUpdateHostRoomSubscription = {
  onUpdateHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteHostRoomSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomFilterInput | null,
};

export type OnDeleteHostRoomSubscription = {
  onDeleteHostRoom?:  {
    __typename: "HostRoom",
    id: string,
    name: string,
    desc?: string | null,
    imageUri?: string | null,
    createdUserId: string,
    lastMessageId?: string | null,
    lastMessage?:  {
      __typename: "HostRoomChatMessage",
      id: string,
      userId: string,
      roomId: string,
      message: string,
      read: boolean,
      user?:  {
        __typename: "User",
        id: string,
        fullName?: string | null,
        firebaseUid: string,
        email: string,
        displayName: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      hostRoom?:  {
        __typename: "HostRoom",
        id: string,
        name: string,
        desc?: string | null,
        imageUri?: string | null,
        createdUserId: string,
        lastMessageId?: string | null,
        createdAt: string,
        updatedAt: string,
        hostRoomLastMessageId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomChatMessagesId?: string | null,
      hostRoomChatMessageUserId?: string | null,
      hostRoomChatMessageHostRoomId?: string | null,
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
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    midiMessages?:  {
      __typename: "ModelHostRoomMidiMessageConnection",
      items:  Array< {
        __typename: "HostRoomMidiMessage",
        id: string,
        userId: string,
        roomId: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        hostRoomMidiMessagesId?: string | null,
        hostRoomMidiMessageUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    hostRoomUsers?:  {
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
        userHostRoomUserId?: string | null,
        hostRoomHostRoomUsersId?: string | null,
        hostRoomUserUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreateHostRoomChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomChatMessageFilterInput | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
  } | null,
};

export type OnUpdateHostRoomChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomChatMessageFilterInput | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
  } | null,
};

export type OnDeleteHostRoomChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionHostRoomChatMessageFilterInput | null,
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
      fullName?: string | null,
      firebaseUid: string,
      email: string,
      displayName: string,
      imageUri?: string | null,
      hostRoomUser?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    hostRoom?:  {
      __typename: "HostRoom",
      id: string,
      name: string,
      desc?: string | null,
      imageUri?: string | null,
      createdUserId: string,
      lastMessageId?: string | null,
      lastMessage?:  {
        __typename: "HostRoomChatMessage",
        id: string,
        userId: string,
        roomId: string,
        message: string,
        read: boolean,
        createdAt: string,
        updatedAt: string,
        hostRoomChatMessagesId?: string | null,
        hostRoomChatMessageUserId?: string | null,
        hostRoomChatMessageHostRoomId?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelHostRoomChatMessageConnection",
        nextToken?: string | null,
      } | null,
      midiMessages?:  {
        __typename: "ModelHostRoomMidiMessageConnection",
        nextToken?: string | null,
      } | null,
      hostRoomUsers?:  {
        __typename: "ModelHostRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      hostRoomLastMessageId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    hostRoomChatMessagesId?: string | null,
    hostRoomChatMessageUserId?: string | null,
    hostRoomChatMessageHostRoomId?: string | null,
  } | null,
};
