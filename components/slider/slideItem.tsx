import {View, ViewStyle, TextStyle, ImageStyle, StyleProp} from 'react-native';
import {Image} from 'expo-image';
import {useStyleSheet, Button, StyleService, Text} from '@ui-kitten/components';

// Define the style interface
interface SlideItemStyles {
    slideItem: StyleProp<ViewStyle>;
    slideItemContent: StyleProp<ViewStyle>;
    slideItemContentHeader: StyleProp<TextStyle>;
    slideItemContentParagraph: StyleProp<TextStyle>;
    image: StyleProp<ImageStyle>;
    topShadow: StyleProp<ViewStyle>;
    bottomShadow: StyleProp<ViewStyle>;
}

export default function SlideItem({title, content, image, nextSlide, index}: {
    title: string,
    content: string,
    image: any,
    nextSlide: (number: number) => void,
    index: number
}) {
    const styles = useStyleSheet(themedStyles) as SlideItemStyles;
    return (
        <View style={styles.slideItem}>
            <Image
                style={styles.image}
                source={image}
                contentFit="cover"
                transition={1000}
            />

            <View style={styles.slideItemContent}>
                <Text category='h4' style={styles.slideItemContentHeader}>
                    {title}
                </Text>
                <Text style={styles.slideItemContentParagraph}>
                    {content}
                </Text>
                <Button>skip</Button>
                <Button onPress={() => nextSlide(index + 1)}>NExt</Button>
            </View>
        </View>
    );
}

const themedStyles = StyleService.create({
    slideItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    } as ViewStyle,
    slideItemContent: {
        backgroundColor: 'color-primary-500',
        borderRadius: 48,
        height: 400,
        zIndex: 4,
        position: 'absolute',
        bottom: 40,
        left: 10,
        right: 10,
        padding: 20,
    } as ViewStyle,
    slideItemContentHeader: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 600,
        marginBottom: 8,
    } as TextStyle,
    slideItemContentParagraph: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    } as TextStyle,
    image: {
        flex: 1,
        zIndex: 1,
        width: '100%',
        backgroundColor: '#0553',
    } as ImageStyle,
    topShadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 2,
        height: '30%',
    } as ViewStyle,
    bottomShadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        height: '50%',
    } as ViewStyle,
});
