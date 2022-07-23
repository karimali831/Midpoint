const isDev = false;

export const rootUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
          'https://localhost:7214'
        : 'https://karimali-001-site4.itempurl.com';
