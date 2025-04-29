import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import lightColors from './colors';

const theme = {
    ...MD3LightTheme,
  fontFamily: ['Inter_400Regular','Inter_500Medium','Inter_600SemiBold','Inter_700Bold'].join(","),
    colors: {
        ...MD3LightTheme.colors,
        ...lightColors
    },
    roundness: 2
};

export default theme;

