import {StyleSheet, View} from 'react-native'
import Swiper from 'react-native-swiper'
import Slide1 from '@/assets/images/screens/on-boarding-1.png';
import Slide2 from '@/assets/images/screens/on-boarding-2.jpg';
import Slide3 from '@/assets/images/screens/on-boarding-3.jpg';
import SlideItem from './slideItem';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {},
  paginationStyle: {
    position: 'absolute',
    top: 10,
    height: 20,
    left: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
  dotStyle: {
    width: '33.3%',
    height: 3
  },
  activeDotStyle: {
    width: '33.3%',
    height: 3
  },
  dotColor: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  },
  activeDotColor: {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  }
})

const items = [
  {
    title: 'Mirësevini në HaniPini Delivery App',
    content: 'Bëhu pjesë e ekipit tonë. Fito sipas kushteve tua dhe nis rrugëtimin drejt suksesit.',
    image: Slide1
  }, {
    title: 'Fito, Mëso dhe Rritu',
    content: 'Kthe çdo shpërndarje në mundësi. Fillo të fitosh sot dhe ndërto aftësi për nesër.',
    image: Slide2
  }, {
    title: 'Rrugëtimi Yt Fillon Këtu',
    content: 'Orar fleksibil dhe pagesë e mirë. Drejto karrierën tënde drejt suksesit me ne.',
    image: Slide3
  }
]
export default function Slider() {
  return (
    <View style={styles.main}>
      <Swiper
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.dotStyle}
        style={styles.wrapper}
        dotColor={styles.dotColor.backgroundColor}
        activeDotColor={styles.activeDotColor.backgroundColor}
        showsButtons={false}>
        {items.map((item, index) =>
          <View key={index} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            <SlideItem title={item.title} content={item.content} image={item.image}/>
          </View>)}
      </Swiper>
    </View>
  );
}
