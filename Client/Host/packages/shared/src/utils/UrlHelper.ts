const isDev = false;

export const rootUrl2: string = 'https://localhost:7204'


export const rootUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
        'https://karimali-001-site5.itempurl.com'
        : 'https://karimali-001-site5.itempurl.com';
