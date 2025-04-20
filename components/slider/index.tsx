import {useRef} from 'react'
import {StyleSheet, View} from 'react-native'
import Swiper from 'react-native-swiper'
import Slide1 from '@/assets/images/screens/on-boarding-1.jpg';
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
    bottom: 10,
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
    title: 'We serve incomparable delicacies',
    content: 'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
    image: Slide1
  }, {
    title: 'We serve incomparable delicacies',
    content: 'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
    image: Slide2
  }, {
    title: 'We serve incomparable delicacies',
    content: 'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
    image: Slide3
  }
]
export default function Slider() {
  const swiperRef = useRef<Swiper>(null);
  const goToSlide = (index: number) => {
    if (index >= items.length) {
      index = 0
    }

    if (swiperRef.current) {
      swiperRef.current.scrollTo(index + 1);
    }
  };
  return (
    <View style={styles.main}>
      <Swiper
        ref={swiperRef}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.dotStyle}
        style={styles.wrapper}
        index={0}
        dotColor={styles.dotColor.backgroundColor}
        activeDotColor={styles.activeDotColor.backgroundColor}
        showsButtons={false}>
        {items.map((item, index) =>
          <SlideItem key={index} index={index} nextSlide={goToSlide} title={item.title}
                     content={item.content} image={item.image}/>)}
      </Swiper>
    </View>
  );
}
