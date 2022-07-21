import { AlertColor } from "@mui/material";

export interface IAlert {
    title: string;
    status?: AlertColor;
    message?: string;
    cancelText?: string
    confirmText?: string
    duration?: number
    blurBackground?: boolean
    position?:
    | 'topleft'
    | 'topcent'
    | 'topright'
    | 'centerleft'
    | 'center'
    | 'centerright'
    | 'bottomleft'
    | 'bottomcenter'
    | 'bottomright';
}
