import { Dimensions, StyleProp, StyleSheet } from 'react-native';

export default function CreateResponsiveStyle<T, U extends Partial<T>>(
    webStyles: StyleSheet.NamedStyles<T>,
    mobileStyles: StyleSheet.NamedStyles<U>
) {
    const width = Dimensions.get('window').width;
    const web = StyleSheet.create<StyleSheet.NamedStyles<T>>(webStyles);
    const mobile = StyleSheet.create<StyleSheet.NamedStyles<U>>(mobileStyles);

    // Return a function that combines wraps web and mobile styles
    return () =>
        (style: keyof T): StyleProp<any> => {
            if (width < 768 && mobile.hasOwnProperty(style)) {
                return StyleSheet.compose(web[style], mobile[style]);
            } else {
                return web[style];
            }
        };
}
