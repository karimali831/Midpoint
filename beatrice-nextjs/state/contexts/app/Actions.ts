import { createAction } from '@reduxjs/toolkit';
import { PageName } from '../../../enum/PageName';
import { IAlert } from '../../../interface/IAlert';
import { IAxiosError } from "../../../interface/IAxiosError";

// ACTION CREATORS
const AxiosErrorAlertAction = createAction<IAxiosError>('@@app/axioserroralert');
const NavigatePageAction = createAction<PageName>('@@app/navigatepage');
const ShowAlertAction  = createAction<IAlert>("@app/showalert")

export {
    AxiosErrorAlertAction,
    NavigatePageAction,
    ShowAlertAction
};

