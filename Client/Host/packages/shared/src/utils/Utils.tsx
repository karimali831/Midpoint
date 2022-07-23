export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};

const getShortHand = (style: string, ...values: any) => {
    if (values.length === 1) {
        return { [style]: values[0] };
    }
    const _genCss = (...values: any) => ({
        [style + 'Top']: values[0],
        [style + 'Right']: values[1],
        [style + 'Bottom']: values[2],
        [style + 'Left']: values[3],
    });
    if (values.length === 2) {
        return _genCss(values[0], values[1], values[0], values[1]);
    }
    if (values.length === 3) {
        return _genCss(values[0], values[1], values[2], values[1]);
    }
    return _genCss(values[0], values[1], values[2], values[3]);
};

export const padding = (...values: Array<number | string>) =>
    getShortHand('padding', ...values);
export const margin = (...values: Array<number | string>) =>
    getShortHand('margin', ...values);

export const truncTxt = (text: string, length: number) => {
    return text.length > 20 ? `${text.substring(0, length)}...` : text;
};

export const isEmptyOrSpaces = (str: string) => {
    return str === null || str.match(/^ *$/) !== null;
};
