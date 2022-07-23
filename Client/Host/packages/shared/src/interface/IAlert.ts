export interface IAlert {
    title: string;
    status?: 'success' | 'error' | 'info' | 'warning';
    message?: string;
    cancelText?: string;
    confirmText?: string;
    autoHide?: boolean;
    duration?: number;
    blurBackground?: boolean;
    position?:
        | 'topleft'
        | 'topcenter'
        | 'topright'
        | 'centerleft'
        | 'center'
        | 'centerright'
        | 'bottomleft'
        | 'bottomcenter'
        | 'bottomright';
}
