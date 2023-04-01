const isDev = false;

export const rootUrl2: string = 'https://localhost:5001'

export const rootUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
        'https://karimali-001-site5.itempurl.com' :
        'http://midpoint-dev.eba-bmgq98xb.eu-west-2.elasticbeanstalk.com';
        // : 'https://karimali-001-site5.itempurl.com';

export const siteUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
        'http://localhost:3000'
        : 'https://beattrice.netlify.app';


export const joinLink = (roomId: string) => `${siteUrl}/dashboard/${roomId}`