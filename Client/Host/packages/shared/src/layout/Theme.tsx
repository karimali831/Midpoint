import { ScaledSize, StatusBarStyle } from 'react-native';
import { Theme } from '../enum/Theme';
import CreateThemeStyle from './ThemeStyle';

export const statusBar = (theme: Theme) => {
    let barStyle: StatusBarStyle;

    if (theme === Theme.Light) {
        barStyle = 'dark-content';
    } else {
        barStyle = 'light-content';
    }

    return barStyle;
};

export const image = (theme: Theme) => {};

const themeStyle = (theme: Theme, window: ScaledSize) =>
    CreateThemeStyle(
        theme,
        // LIGHT STYLES
        {
            prop1: {
                backgroundColor: '#FFFFFF',
            },
        },
        // DARK STYLES
        {
            prop1: {
                backgroundColor: '#000',
            },
        }
    );

export default themeStyle;
