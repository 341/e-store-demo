import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'expo-image';

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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  slideItemContentParagraph: {
    fontSize: 14,
    color: 'white',
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

export default function SlideItem({title, content, image}: { title: string, content: string, image: any }) {
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
      </View>
    </View>
  );
}
