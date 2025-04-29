import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import axios from 'axios';
import {PermissionsAndroid} from 'react-native';

class FirebaseNotification {

  static registerForRemoteNotifications = async () => {
    if (!messaging().isDeviceRegisteredForRemoteMessages) {
      return await messaging()
        .registerDeviceForRemoteMessages()
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
    } else {
      return true;
    }
  };
  static requestUserPermission = async () => {
    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      return authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    } else {
      let version =
        typeof Platform.Version === 'string'
          ? parseInt(Platform.Version)
          : Platform.Version;
      if (version >= 32) {
        const authStatus = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        return authStatus === 'granted';
      }
      return true;
    }
  };
  static sendPushTokenToBackend = async (expoPushToken: string, token: string, userId: string) => {
    try {
      const url = `https://api.hani-pini.com/users/${userId}`;
      await axios.patch(
        url,
        {fcmToken: expoPushToken},
        {headers: {Authorization: `Bearer ${token}`}}
      );
    } catch (e) {
      // console.error('Error sending push token:', e);
    }
  };

  static getFCMToken = (token, userId) => {
    messaging()
      .getToken()
      .then(fcmToken => {
        this.sendPushTokenToBackend(fcmToken, token, userId);
      })
      .catch(e => console.log('Messaging error: ' + e));

    return messaging().onTokenRefresh(fcmToken => {
      this.sendPushTokenToBackend(fcmToken, token, userId);
    });
  };

  static messageListener(callBack: any) {
    messaging().onMessage(remoteMessage => {
      if (!remoteMessage.data) {
        return
      }
      callBack(remoteMessage)
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      if (!remoteMessage.data) {
        return;
      }
      callBack(remoteMessage)
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (!remoteMessage?.data) {
          return;
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      callBack(remoteMessage)
    });
  }

  static listen = async (token: string, userId: string, callBack: any) => {
    const isPermissionGranted = await this.requestUserPermission();
    if (!isPermissionGranted) {
      return;
    }

    const isRegistered = await this.registerForRemoteNotifications();
    if (isRegistered || Platform.OS === 'android') {
      this.getFCMToken(token, userId);
    }

    this.messageListener(callBack);
  };
}

export default FirebaseNotification;
