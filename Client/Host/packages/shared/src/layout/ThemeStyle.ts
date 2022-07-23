import { StyleProp, StyleSheet } from 'react-native';
import { Theme } from '../enum/Theme';

export default function CreateThemeStyle<T, U extends Partial<T>>(
    theme: Theme,
    lightStyles: StyleSheet.NamedStyles<T>,
    darkStyles: StyleSheet.NamedStyles<U>
) {
    const light = StyleSheet.create<StyleSheet.NamedStyles<T>>(lightStyles);
    const dark = StyleSheet.create<StyleSheet.NamedStyles<U>>(darkStyles);

    // Return a function that combines wraps web and mobile styles
    return () =>
        (style: keyof T): StyleProp<any> => {
            if (theme === Theme.Dark && dark.hasOwnProperty(style)) {
                return StyleSheet.compose(light[style], dark[style]);
            } else {
                return light[style];
            }
        };
}
