import { createAction } from '@reduxjs/toolkit'
import { ICreateUserDTO } from '../../../api/userApi'
import { IUser } from '../../../models/IUser'
import { IFirebaseUser } from '../../../types/types'
import { IPromotion } from '../../../models/IPromotion'
import { IPayment } from '../../../models/IPayment'

const GetUserAction = createAction('@@User/GetUser')
const GetUserSuccessAction = createAction<IUser>('@@User/GetUserSuccess')
const SigninLoadingAction = createAction<boolean>('@@User/SigninLoading')
const FirebaseAuthEmptyAction = createAction('@@User/FirebaseAuthEmptyAction')
const FirebaseAuthenticatedAction = createAction<IFirebaseUser>(
    '@@User/FirebaseAuthenticated'
)
const UpdateUserInfoAction = createAction<{
    updatedKey: keyof IUser
    updatedValue: any
}>('@@User/UpdateUserInfo')

const UpdateUserInfoSuccessAction = createAction<{
    updatedKey: keyof IUser
    updatedValue: any
}>('@@User/UpdateUserInfoSuccess')

const CamToggleAction = createAction('@@User/CamToggleAction')
const DJReadyAction = createAction<boolean>('@@User/DJReady')
const LoginSuccessAction = createAction<IUser>('@@User/LoginSuccess')
const SetFirebaseUidAction = createAction<string>('@@User/SetFirebaseUid')
const CreateUserAction = createAction<ICreateUserDTO>('@@User/CreateUser')
const SignOutAction = createAction('@@User/SignOutAction')
const GetPromotionsSuccessAction = createAction<IPromotion[]>(
    '@@User/GetPromotionsSuccess'
)
const GetPromotionsFailureAction = createAction('@@User/GetPromotionsFailure')
const GetPromotionsAction = createAction('@@Checkout/GetPromotions')
const GetPaymentsSuccessAction = createAction<IPayment[]>(
    '@@User/GetPaymentsSuccess'
)
const GetPaymentsAction = createAction('@@Checkout/GetPayments')

export {
    GetUserAction,
    GetUserSuccessAction,
    SigninLoadingAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction,
    LoginSuccessAction,
    CreateUserAction,
    CamToggleAction,
    DJReadyAction,
    SignOutAction,
    SetFirebaseUidAction,
    GetPromotionsSuccessAction,
    GetPromotionsAction,
    GetPaymentsSuccessAction,
    GetPaymentsAction,
    GetPromotionsFailureAction
}
