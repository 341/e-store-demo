import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import lightColors from "@/themes/colors";
import useAxiosFetch, {MethodType} from "@/components/hooks/useFetch";
import * as ImagePicker from "expo-image-picker";
import {getToken, setUser} from "@/components/utils/localStorage";
import {api} from "@/components/utils/api";
import {Image} from "expo-image";

export default function UploadProfileImage() {
  const {data, loading, error} = useAxiosFetch('auth/profile', MethodType.GET);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  if (loading) {
    return <View/>
  }

  if (error) {
    return <View><Text>Error</Text></View>
  }
  const uploadFile = async () => {
    try {

      if (permissionResponse.status !== 'granted') {
        await requestPermission();
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        const formData = new FormData();
        formData.append('file', {
          uri: imageUri,
          type: 'image/jpeg', // or the appropriate type
          name: 'upload.jpg', // or the appropriate name
        });

        const token = await getToken();
        const id = data?._id;

        const response = await api.patch(`users/${id}/profileImage`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        })

        const userData = JSON.parse(response.data);
        await setUser(userData);
      } else {
        console.log('Image selection cancelled.');
      }

    } catch (error) {
      console.log("Error picking documents:", error);
    }
  }
    return (
      <TouchableOpacity style={{position: "relative", marginBottom: 20}} onPress={() => uploadFile()}>
        <View style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: lightColors.primary,
          justifyContent: 'center', alignItems: 'center'
        }}>
        </View>
        <View style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          backgroundColor: lightColors.primary,
          padding: 5,
          borderRadius: 50
        }}>
          <Image
            style={{
              width: 12,
              height: 12,
            }}
            source={Edit}
            contentFit="cover"
            transition={1000}
          />
        </View>
      </TouchableOpacity>)
}
