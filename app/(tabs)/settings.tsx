import {StyleSheet, View} from "react-native";
import {Button, Text} from 'react-native-paper';
import {router} from 'expo-router';
import lightColors from "@/themes/colors";
import React from "react";
import useAxiosFetch, {MethodType} from "@/components/hooks/useFetch";
import {clearData} from "@/components/utils/localStorage";
import UploadProfileImage from "@/components/header/UploadProfileImage";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: lightColors.background,
    padding: 20
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 14,
  },
  name: {
    fontWeight: 500,
    fontSize: 16
  }
})

export default function Settings() {
  const {data, loading, error} = useAxiosFetch('auth/profile', MethodType.GET);

  const logOut = async () => {
    await clearData();
    // Update Firebase notifications when user data is available
    // FirebaseNotification.listen(userData.accessToken, userData?._id);
    router.navigate('/auth/login');
  }

  if (loading) {
    return <View/>
  }

  if (error) {
    return <View><Text>Error</Text></View>
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Porosite</Text>
      </View>
      <View style={{width: "100%", alignItems: 'center', marginBottom: 20}}>
        <UploadProfileImage />
        {data && <Text style={styles.name}>{data?.firstName + " " + data?.lastName}</Text>}
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Llogria</Text>
        <Button buttonColor={lightColors.blackDark}
                mode="contained"
                style={{borderColor: "none", marginBottom: 10}}
                labelStyle={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                icon={"account"}
                onPress={() => router.navigate("auth/profile")}>
          Nrysho detajet e llogarise
        </Button>
        <Button buttonColor={lightColors.blackDark}
                mode="contained"
                style={{borderColor: "none", marginBottom: 10}}
                labelStyle={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                icon={"key-chain"}
                onPress={() => router.navigate("/privacy")}>
          Privatesia dhe Rregulloret
        </Button>
        <Button
          buttonColor={lightColors.blackDark}
          mode="contained"
          style={{borderColor: "none", marginBottom: 10}}
          labelStyle={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
          icon={"help"}
          onPress={() => router.navigate("/help")}>
          Help Center
        </Button>

        <Button buttonColor={lightColors.blackDark}
                mode="contained"
                style={{borderColor: "none", marginTop: "auto", marginBottom: 10}}
                textColor={lightColors.error}
                labelStyle={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                icon={"logout"} onPress={logOut}>
          Logout
        </Button>
      </View>
    </View>
  );
}
