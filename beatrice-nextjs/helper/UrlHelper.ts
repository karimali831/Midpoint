const isDev = true
export class UrlHelper {

    public static readonly ApiUrl =
        isDev
            ? 'https://localhost:7204'
            : 'https://karimali-001-site4.itempurl.com'

    public static readonly RootUrl =
        isDev
            ? 'http://localhost:19006'
            : 'https://appology.netlify.app'
}