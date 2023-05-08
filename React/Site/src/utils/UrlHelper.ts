export const rootUrl2: string = 'https://mid-point.azurewebsites.net'

export const rootUrl4: string = 'https://karimali-001-site5.itempurl.com'

export const rootUrl: string = 'https://localhost:7100'

export const rootUrl3: string = 'https://localhost:44376'

export const rootUrl1: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
          'https://localhost:44376'
        : // 'https://localhost:7100'
          'https://mid-point.azurewebsites.net'

export const siteUrl: string =
    process.env.NODE_ENV === 'development'
        ? // isDev
          'http://localhost:3000'
        : 'https://beattrice.netlify.app'

export const joinLink = (roomId: string) => `${siteUrl}/dashboard/${roomId}`
