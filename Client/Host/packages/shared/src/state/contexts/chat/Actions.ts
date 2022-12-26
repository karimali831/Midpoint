import { createAction } from "@reduxjs/toolkit";

const LoadingMessagesAction = createAction<boolean>("@@Chat/LoadingMessages")

export { 
    LoadingMessagesAction
 }