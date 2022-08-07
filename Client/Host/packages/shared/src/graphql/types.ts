/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  userId: string,
  email: string,
  displayName: string,
  id?: string | null,
};

export type ModelUserConditionInput = {
  userId?: ModelIDInput | null,
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
  userId: string,
  email: string,
  displayName: string,
  channels?: ModelUserChannelConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserChannelConnection = {
  __typename: "ModelUserChannelConnection",
  items:  Array<UserChannel | null >,
  nextToken?: string | null,
};

export type UserChannel = {
  __typename: "UserChannel",
  id: string,
  name: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userChannelsId?: string | null,
};

export type UpdateUserInput = {
  userId?: string | null,
  email?: string | null,
  displayName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserChannelInput = {
  id?: string | null,
  name: string,
  userChannelsId?: string | null,
};

export type ModelUserChannelConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserChannelConditionInput | null > | null,
  or?: Array< ModelUserChannelConditionInput | null > | null,
  not?: ModelUserChannelConditionInput | null,
  userChannelsId?: ModelIDInput | null,
};

export type UpdateUserChannelInput = {
  id: string,
  name?: string | null,
  userChannelsId?: string | null,
};

export type DeleteUserChannelInput = {
  id: string,
};

export type ModelUserFilterInput = {
  userId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserChannelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserChannelFilterInput | null > | null,
  or?: Array< ModelUserChannelFilterInput | null > | null,
  not?: ModelUserChannelFilterInput | null,
  userChannelsId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
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
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
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
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserChannelMutationVariables = {
  input: CreateUserChannelInput,
  condition?: ModelUserChannelConditionInput | null,
};

export type CreateUserChannelMutation = {
  createUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};

export type UpdateUserChannelMutationVariables = {
  input: UpdateUserChannelInput,
  condition?: ModelUserChannelConditionInput | null,
};

export type UpdateUserChannelMutation = {
  updateUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};

export type DeleteUserChannelMutationVariables = {
  input: DeleteUserChannelInput,
  condition?: ModelUserChannelConditionInput | null,
};

export type DeleteUserChannelMutation = {
  deleteUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserChannelQueryVariables = {
  id: string,
};

export type GetUserChannelQuery = {
  getUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};

export type ListUserChannelsQueryVariables = {
  filter?: ModelUserChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChannelsQuery = {
  listUserChannels?:  {
    __typename: "ModelUserChannelConnection",
    items:  Array< {
      __typename: "UserChannel",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      userChannelsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    userId: string,
    email: string,
    displayName: string,
    channels?:  {
      __typename: "ModelUserChannelConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserChannelSubscription = {
  onCreateUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};

export type OnUpdateUserChannelSubscription = {
  onUpdateUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};

export type OnDeleteUserChannelSubscription = {
  onDeleteUserChannel?:  {
    __typename: "UserChannel",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      userId: string,
      email: string,
      displayName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userChannelsId?: string | null,
  } | null,
};
