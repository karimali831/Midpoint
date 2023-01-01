const isDev = false;

export const rootUrl: string = 'https://localhost:7204'

export const rootUrl2: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
        'https://karimali-001-site5.itempurl.com'
        : 'https://karimali-001-site5.itempurl.com';

export const siteUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
        'http://localhost:3000'
        : 'https://beattrice.netlify.app';


export const joinLink = (roomId: string) => `${siteUrl}/dashboard/${roomId}`