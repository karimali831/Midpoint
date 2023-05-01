import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { rootUrl } from "./UrlHelper";

export const newHubConnection = () =>
    new HubConnectionBuilder()
        .withUrl(`${rootUrl}/webrtchub`)
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect()
        .build();