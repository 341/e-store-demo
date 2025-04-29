import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'expo-image';
import {Button} from 'react-native-paper';
import lightColors from '@/themes/colors';

const styles = StyleSheet.create({
    slideItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    slideItemContent: {
        zIndex: 4,
        position: 'absolute',
        bottom: 150,
        left: 10,
        right: 10,
        padding: 20,
    },
    slideItemContentHeader: {
        fontSize: 20,
        color: lightColors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    slideItemContentParagraph: {
        fontSize: 14,
        color: lightColors.gray,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        zIndex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
    topShadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 2,
        height: '30%',
    },
    bottomShadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        height: '50%',
    },
});

export default function SlideItem({title, content, image, nextSlide, index}: { title: string, content: string, image: any, nextSlide: (number: number) => void, index: number}) {
    return (
        <View style={styles.slideItem}>
            <Image
                style={styles.image}
                source={image}
                contentFit="cover"
                transition={1000}
            />

            <View style={styles.slideItemContent}>
                <Text style={styles.slideItemContentHeader}>
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
