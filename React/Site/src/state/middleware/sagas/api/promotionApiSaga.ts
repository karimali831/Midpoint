import { call, put, select, takeLatest } from 'redux-saga/effects'
import { IUser } from '../../../../models/IUser'
import { getUser } from '../../../contexts/user/Selectors'
import { promotionApi } from '../../../../api/promotionApi'
import {
    GetPromotionsAction,
    GetPromotionsFailureAction,
    GetPromotionsSuccessAction
} from '../../../contexts/user/Actions'
import { IPromotion } from '../../../../models/IPromotion'

export default function* promotionApiSaga() {
    yield takeLatest(GetPromotionsAction.type, getPromotions)
}

export function* getPromotions() {
    try {
        const user: IUser = yield select(getUser)
        const response: IPromotion[] = yield call(
            promotionApi.getPromotions,
            user.id
        )

        if (response.length > 0) {
            yield put(GetPromotionsSuccessAction(response))
        }
    } catch (error: any) {
        yield put(GetPromotionsFailureAction(error.message))
    }
}
