const isDev = false;

export const rootUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
        'https://localhost:7204'
        : 'https://karimali-001-site5.itempurl.com';
