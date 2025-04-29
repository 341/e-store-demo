import {View, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {IconButton} from "react-native-paper";

export default function Photo({setPicture}: {setPicture: (picture: string) => void }) {
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setPicture(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    const buttonStyle = {
        backgroundColor: 'rgba(0, 186, 129, 0.1)',
        color: 'rgba(0, 186, 129, 1)',
    }

    const pickCameraAsync = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setPicture(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.footerContainer}>
                <IconButton icon='file-image-plus-outline'
                            iconColor={buttonStyle.color}
                            style={{borderRadius: 5}}
                            onPress={pickImageAsync}
                            containerColor={buttonStyle.backgroundColor}/>

                <IconButton icon='camera-outline'
                            iconColor={buttonStyle.color}
                            style={{borderRadius: 5}}
                            onPress={pickCameraAsync}
                            containerColor={buttonStyle.backgroundColor}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
