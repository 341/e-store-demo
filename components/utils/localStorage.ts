import AsyncStorage from '@react-native-async-storage/async-storage';
import JWT, {SupportedAlgorithms} from 'expo-jwt';

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // console.error('Failed to save user:', e);
  }
};

export const setUser = async (user: object | string) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    // console.error('Failed to save user:', e);
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (e) {
    // console.error('Failed to fetch user:', e);
  }
};

export const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    // console.error('Failed to save token:', e);
  }
};

interface TokenI {
  email: string,
  exp: number,
  iat: number,
  id: string,
  role: string
}

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const JWT_SECRET = "h4kdsSD3FGMS2";
    if (token) {
      const decoded: TokenI = JWT.decode(token, JWT_SECRET, true, {algorithms: [SupportedAlgorithms.HS256]}) as TokenI;

      const isExpired = Date.now() >= decoded.exp * 1000;

      if (isExpired) {
        await clearData();
        return false;
      }
      return token;
    }

  } catch (e) {
    // console.error('Failed to fetch token:', e);
  }
};
