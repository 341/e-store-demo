import {StyleSheet} from 'react-native';
import {Image} from "expo-image";

type Props = {
    selectedImage?: string;
};

export default function ImageViewer({selectedImage}: Props) {
    const imageSource = {uri: selectedImage}
    return <Image source={imageSource} style={styles.image}/>;
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        width: '100%',
        height: 200,
    },
});
