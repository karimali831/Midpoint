export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        }
    )
}

export function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay))
}

export const dateDiff = (first: any, second: any) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24))
}

export const ordinalDate = (input: string) => {
    alert(input)

    const [dayName, day] = input.split(',')
    const number = Number(day.trim()) % 10

    const ordinal =
        ~~((number % 100) / 10) === 1
            ? 'th'
            : number === 1
            ? 'st'
            : number === 2
            ? 'nd'
            : number === 3
            ? 'rd'
            : 'th'

    return `${dayName} ${number}${ordinal}`
}
